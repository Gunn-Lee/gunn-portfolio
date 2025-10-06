import { projectShowcase } from '../../lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Projects() {
  return (
    <section className='mt-24 space-y-12'>
      <SectionHeading
        eyebrow='Projects'
        title='Case studies ready for a spotlight'
        description='Swap in real screenshots, repo links, and live demos—these placeholders outline the storytelling structure for production work.'
      />
      <div className='grid gap-8 md:grid-cols-2 xl:grid-cols-3'>
        {projectShowcase.map((project, index) => (
          <article
            key={project.title}
            className='group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200/50 bg-white/80 shadow-[0_30px_70px_-50px_rgba(6,182,212,0.6)] transition hover:-translate-y-1.5 hover:border-purple-400/60 hover:shadow-[0_45px_120px_-80px_rgba(168,85,247,0.8)] dark:border-white/10 dark:bg-white/5 animate-fade-up'
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className='relative h-48 overflow-hidden'>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-80 blur-2xl transition duration-700 group-hover:scale-105 group-hover:opacity-100`}
              />
              <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.55),_transparent_55%)] mix-blend-screen' />
              <div className='relative flex h-full items-center justify-center text-center'>
                <p className='max-w-xs px-6 text-sm font-medium uppercase tracking-[0.3em] text-white/80'>
                  Replace with your project hero image or looping demo
                </p>
              </div>
            </div>
            <div className='flex flex-1 flex-col gap-4 p-6'>
              <h3 className='text-2xl font-semibold text-neutral-900 transition group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-300'>
                {project.title}
              </h3>
              <p className='text-sm leading-relaxed text-neutral-600 dark:text-neutral-200'>{project.description}</p>
              <div className='flex flex-wrap gap-2'>
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className='rounded-full border border-purple-200/60 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-700 transition group-hover:border-purple-400/80 group-hover:text-purple-600 dark:border-purple-400/30 dark:bg-purple-500/10 dark:text-purple-200'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='mt-auto rounded-2xl border border-dashed border-purple-300/60 bg-purple-50/40 px-4 py-3 text-xs text-purple-700 dark:border-purple-500/40 dark:bg-purple-500/10 dark:text-purple-200'>
                {project.note}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
