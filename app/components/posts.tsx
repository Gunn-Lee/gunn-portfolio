import Link from 'next/link'
import { formatDate, getBlogPosts, getProjects } from 'app/lib/utils'

type PostType = 'blog' | 'project'

interface PostListProps {
  type: PostType
}

export function PostList({ type }: PostListProps) {
  const allPosts = type === 'blog' ? getBlogPosts() : getProjects()
  const basePath = type === 'blog' ? '/blog' : '/projects'

  return (
    <div>
      {allPosts
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
        .map((post) => (
          <Link
            key={post.slug}
            className='flex flex-col space-y-1 mb-4'
            href={`${basePath}/${post.slug}`}
          >
            <div className='w-full flex flex-col md:flex-row space-x-0 md:space-x-2'>
              <p className='text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums'>
                {post.metadata.publishedAt
                  ? formatDate(post.metadata.publishedAt, false)
                  : ''}
              </p>
              <p className='text-neutral-900 dark:text-neutral-100 tracking-tight'>
                {post.metadata.title}
              </p>
            </div>
            {type === 'project' && (
              <p className='text-neutral-600 dark:text-neutral-400 text-sm'>
                {post.metadata.summary}
              </p>
            )}
          </Link>
        ))}
    </div>
  )
}

// Keep backward compatibility
export function BlogPosts() {
  return <PostList type='blog' />
}

export function ProjectPosts() {
  return <PostList type='project' />
}
