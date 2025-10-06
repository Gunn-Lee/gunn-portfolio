interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className='space-y-3 max-w-3xl'>
      <div className='text-sm uppercase tracking-[0.4em] text-neutral-500 dark:text-neutral-400 animate-fade-in'>
        {eyebrow}
      </div>
      <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance animate-fade-up'>
        {title}
      </h2>
      {description ? (
        <p
          className='text-base sm:text-lg text-neutral-600 dark:text-neutral-300 animate-fade-up'
          style={{ animationDelay: '0.1s' }}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
