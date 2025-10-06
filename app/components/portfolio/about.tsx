import { SectionHeading } from './section-heading'

export function About() {
  return (
    <section className='relative mt-24 rounded-3xl border border-neutral-200/10 bg-white/70 px-6 py-16 shadow-[0_30px_100px_-70px_rgba(14,165,233,0.7)] backdrop-blur dark:border-white/5 dark:bg-white/5 sm:px-12'>
      <div className='absolute inset-0 -z-10 overflow-hidden rounded-3xl'>
        <div className='absolute inset-y-0 left-1/2 w-[140%] -translate-x-1/2 bg-gradient-to-br from-purple-100/60 via-cyan-100/40 to-transparent opacity-70 blur-3xl dark:from-purple-500/20 dark:via-cyan-400/10' />
      </div>
      <div className='grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]'>
        <SectionHeading
          eyebrow='About'
          title='Crafting interfaces that balance intuition and technical depth'
          description="I'm a frontend-focused engineer translating complex requirements into elegant, resilient products. From B2B ERP systems to demo-worthy data experiences, I help teams move fast without sacrificing craft."
        />
        <div className='grid gap-8 text-neutral-700 dark:text-neutral-200'>
          <div className='space-y-4 animate-fade-up' style={{ animationDelay: '0.1s' }}>
            <p>
              I specialise in creating expressive user journeys backed by solid engineering foundations. My approach blends
              discovery workshops, interaction design, and rigorous implementation practices—ensuring each release is polished,
              performant, and measurable.
            </p>
            <p>
              Recent wins include orchestrating an ERP purchase module overhaul that boosted throughput by 55% and building
              immersive dashboards showcased at CES 2024. Whether partnering with designers or shaping API contracts, I aim to
              deliver calm, confidence-inspiring software.
            </p>
          </div>
          <div className='grid gap-4 sm:grid-cols-2'>
            {[ 
              { label: 'Location', value: 'Fort Lee, NJ (open to remote)' },
              { label: 'Focus', value: 'Frontend Architecture & Design Systems' },
              { label: 'Education', value: 'B.S. Applied Mathematics & Statistics, Stony Brook University' },
              { label: 'Certifications', value: 'Certified Salesforce Developer' },
            ].map((item) => (
              <div
                key={item.label}
                className='rounded-2xl border border-neutral-200/60 bg-white/80 px-5 py-4 shadow-inner shadow-neutral-200/60 transition hover:border-purple-400/60 hover:shadow-purple-400/30 dark:border-white/10 dark:bg-white/5 dark:shadow-none'
              >
                <p className='text-xs uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500'>{item.label}</p>
                <p className='mt-2 text-sm font-medium text-neutral-800 dark:text-white'>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
