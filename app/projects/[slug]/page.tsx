import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getProjects } from 'app/lib/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  let projects = getProjects()

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  let project = getProjects().find(
    (project) => project.slug === resolvedParams.slug
  )
  if (!project) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = project.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title || 'Project')}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/projects/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Project({ params }) {
  const resolvedParams = await params
  let project = getProjects().find(
    (project) => project.slug === resolvedParams.slug
  )

  if (!project) {
    notFound()
  }

  // Safely extract metadata with defaults
  const {
    techStack = [],
    liveUrl = null,
    githubUrl = null,
  } = (project.metadata as any) || {}

  return (
    <section>
      <script
        type='application/ld+json'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            headline: project.metadata.title,
            datePublished: project.metadata.publishedAt,
            dateModified: project.metadata.publishedAt,
            description: project.metadata.summary,
            image: project.metadata.image
              ? `${baseUrl}${project.metadata.image}`
              : `/og?title=${encodeURIComponent(
                  project.metadata.title || 'Project'
                )}`,
            url: `${baseUrl}/projects/${project.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className='title font-semibold text-2xl tracking-tighter'>
        {project.metadata.title}
      </h1>
      <div className='flex justify-between items-center mt-2 mb-4 text-sm'>
        <p className='text-sm text-neutral-600 dark:text-neutral-400'>
          {project.metadata.publishedAt
            ? formatDate(project.metadata.publishedAt)
            : ''}
        </p>
      </div>

      {/* Project Links */}
      {(liveUrl || githubUrl) && (
        <div className='flex gap-4 mb-6'>
          {liveUrl && (
            <a
              href={liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors'
            >
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md transition-colors'
            >
              GitHub
            </a>
          )}
        </div>
      )}

      {/* Tech Stack */}
      {techStack && Array.isArray(techStack) && techStack.length > 0 && (
        <div className='mb-6'>
          <h3 className='text-lg font-semibold mb-2'>Tech Stack</h3>
          <div className='flex flex-wrap gap-2'>
            {techStack.map((tech) => (
              <span
                key={tech}
                className='px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      <article className='prose'>
        {project.content && <CustomMDX source={project.content} />}
      </article>
    </section>
  )
}
