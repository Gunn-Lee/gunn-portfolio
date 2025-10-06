import Link from 'next/link'
import { heroContent, highlightStats } from '../../lib/portfolio-data'

export function Hero() {
  return (
    <section className='relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 px-6 py-16 sm:px-12 sm:py-20 shadow-[0_35px_120px_-60px_rgba(168,85,247,0.6)]'>
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-500/60 via-indigo-500/40 to-cyan-400/30 blur-3xl animate-pulse-slow' />
        <div className='absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-tr from-fuchsia-500/40 via-sky-400/40 to-transparent blur-3xl animate-pulse-slower' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.22),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.18),_transparent_50%)]' />
      </div>
      <div className='grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center'>
        <div className='space-y-8 text-white'>
          <span className='text-sm uppercase tracking-[0.6em] text-purple-200/80 animate-fade-in'>
            {heroContent.name}
          </span>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance animate-fade-up'>
            {heroContent.title}
          </h1>
          <p className='text-lg sm:text-xl text-purple-100/90 animate-fade-up' style={{ animationDelay: '0.1s' }}>
            {heroContent.intro}
          </p>
          <div className='flex flex-wrap gap-4 animate-fade-up' style={{ animationDelay: '0.2s' }}>
            {heroContent.ctas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                className={
                  cta.primary
                    ? 'inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 px-6 py-2 text-base font-medium text-white shadow-lg shadow-purple-500/30 transition hover:scale-[1.02] hover:shadow-purple-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400'
                    : 'inline-flex items-center justify-center rounded-full border border-purple-300/40 px-6 py-2 text-base font-medium text-purple-100/80 backdrop-blur transition hover:border-purple-200/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300'
                }
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
        <div className='grid gap-6 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-lg animate-fade-up' style={{ animationDelay: '0.3s' }}>
          <p className='text-sm uppercase tracking-[0.35em] text-purple-100/70'>
            Creative Metrics
          </p>
          <div className='grid gap-4 sm:grid-cols-3'>
            {highlightStats.map((stat) => (
              <div
                key={stat.label}
                className='rounded-xl border border-white/10 bg-black/30 px-4 py-5 text-center shadow-inner shadow-purple-500/10'
              >
                <div className='text-3xl font-semibold text-white'>{stat.value}</div>
                <p className='mt-2 text-sm text-purple-100/70'>{stat.label}</p>
              </div>
            ))}
          </div>
          <p className='text-sm text-purple-100/70'>
            Building luminous user journeys with accessibility, performance, and craft at the core.
          </p>
        </div>
      </div>
    </section>
  )
}
