import { skills } from '../../lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Skills() {
  return (
    <section className='mt-24 space-y-12'>
      <SectionHeading
        eyebrow='Skills'
        title='A toolkit for shipping resilient, expressive interfaces'
        description='Curated technologies that enable rapid prototyping, production-grade delivery, and long-term maintainability.'
      />
      <div className='grid gap-6 md:grid-cols-3'>
        {skills.map((category, index) => (
          <div
            key={category.title}
            className='relative overflow-hidden rounded-3xl border border-neutral-200/40 bg-white/70 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition hover:-translate-y-1 hover:border-purple-400/60 hover:shadow-[0_25px_50px_-20px_rgba(147,197,253,0.7)] dark:border-white/10 dark:bg-white/5 animate-fade-up'
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.18),_transparent_55%)] opacity-70' />
            <h3 className='text-lg font-semibold text-neutral-900 dark:text-white'>{category.title}</h3>
            <div className='mt-4 flex flex-wrap gap-2'>
              {category.items.map((item) => (
                <span
                  key={item}
                  className='animate-fade-in rounded-full border border-purple-300/50 bg-gradient-to-r from-purple-100/90 via-white/70 to-cyan-100/60 px-4 py-1 text-sm font-medium text-purple-900 shadow-sm shadow-purple-200/70 dark:border-purple-400/20 dark:from-purple-500/40 dark:via-purple-500/10 dark:to-cyan-400/20 dark:text-white'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
