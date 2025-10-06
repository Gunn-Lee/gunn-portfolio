import { experiences } from '../../lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Experience() {
  return (
    <section className='mt-24 space-y-12'>
      <SectionHeading
        eyebrow='Experience'
        title='Leading high-impact deliveries across startups and enterprise teams'
        description='Scaling complex systems, orchestrating cross-functional collaboration, and delivering polished features with measurable outcomes.'
      />
      <div className='relative before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-purple-300/40 before:via-purple-400/20 before:to-transparent sm:before:left-1/2 sm:before:top-0 sm:before:h-full'>
        <div className='space-y-12'>
          {experiences.map((experience, index) => (
            <article
              key={experience.company}
              className='relative grid gap-6 rounded-3xl border border-neutral-200/50 bg-white/80 p-6 shadow-[0_30px_80px_-60px_rgba(79,70,229,0.6)] backdrop-blur dark:border-white/10 dark:bg-white/5 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] animate-fade-up'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className='absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 shadow-[0_0_0_6px_rgba(244,114,182,0.12)] sm:left-1/2 sm:-translate-x-1/2 sm:transform' />
              <header className='space-y-2 pl-8 sm:pl-0'>
                <p className='text-sm uppercase tracking-[0.35em] text-purple-400/70'>{experience.period}</p>
                <h3 className='text-2xl font-semibold text-neutral-900 dark:text-white'>{experience.role}</h3>
                <p className='text-base text-neutral-500 dark:text-neutral-300'>
                  {experience.company} • {experience.location}
                </p>
              </header>
              <ul className='space-y-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-200'>
                {experience.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className='relative rounded-2xl border border-neutral-200/60 bg-white/60 px-5 py-4 shadow-inner shadow-neutral-200/40 transition hover:border-purple-400/50 hover:shadow-purple-300/20 dark:border-white/10 dark:bg-white/5'
                  >
                    <span className='block pl-4 before:absolute before:left-5 before:top-1/2 before:h-1 before:w-1 before:-translate-x-4 before:-translate-y-1/2 before:rounded-full before:bg-gradient-to-r before:from-purple-400 before:to-cyan-400'>
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
