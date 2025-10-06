import Link from 'next/link'
import { contactLinks } from '../../lib/portfolio-data'

export function Contact() {
  return (
    <section className='relative mt-28 overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 px-6 py-16 sm:px-12'>
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-fuchsia-500/40 via-purple-500/30 to-sky-400/20 blur-3xl animate-orbit' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.16),_transparent_52%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.18),_transparent_55%)]' />
      </div>
      <div className='mx-auto flex max-w-3xl flex-col items-center text-center text-white space-y-8'>
        <p className='text-sm uppercase tracking-[0.6em] text-purple-200/80 animate-fade-in'>Ready to create</p>
        <h2 className='text-4xl sm:text-5xl font-semibold tracking-tight text-balance animate-fade-up'>
          Let&apos;s design luminous digital experiences together
        </h2>
        <p className='max-w-xl text-base sm:text-lg text-purple-100/90 animate-fade-up' style={{ animationDelay: '0.1s' }}>
          I&apos;m always excited to collaborate on ambitious interfaces, rethink existing systems, or brainstorm what&apos;s next. Drop a note and let&apos;s craft something remarkable.
        </p>
        <div className='flex flex-wrap items-center justify-center gap-4 animate-fade-up' style={{ animationDelay: '0.2s' }}>
          {contactLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className='inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.25em] text-white transition hover:border-white/70 hover:bg-white/20'
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
