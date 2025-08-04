import { baseUrl } from 'app/sitemap'
import { getBlogPosts, getProjects } from 'app/lib/utils'

function escapeXml(unsafe: string): string {
  if (!unsafe) return ''
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function GET() {
  let allBlogs = getBlogPosts()
  let allProjects = getProjects()

  // Combine blogs and projects with type indicators
  let allContent = [
    ...allBlogs.map((post) => ({ ...post, type: 'blog' as const })),
    ...allProjects.map((project) => ({ ...project, type: 'project' as const })),
  ]

  const items = allContent
    .sort((a, b) => {
      if (
        a.metadata.publishedAt &&
        b.metadata.publishedAt &&
        new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ) {
        return -1
      }
      return 1
    })
    .map((item) => {
      const title = escapeXml(item.metadata.title || 'Untitled')
      const projectSuffix = item.type === 'project' ? ' [Project]' : ''
      const link = `${baseUrl}/${item.type}/${encodeURIComponent(item.slug)}`
      const description = item.metadata.summary || ''
      const category = item.type === 'blog' ? 'Blog Post' : 'Project'
      const pubDate = item.metadata.publishedAt
        ? new Date(item.metadata.publishedAt).toUTCString()
        : new Date().toUTCString()

      return `    <item>
      <title>${title}${projectSuffix}</title>
      <link>${link}</link>
      <description><![CDATA[${description}]]></description>
      <category>${category}</category>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${link}</guid>
    </item>`
    })
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Gunn Lee - Portfolio &amp; Blog</title>
    <link>${baseUrl}</link>
    <description>Latest blog posts and projects from Gunn Lee's portfolio</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  })
}
