function ArrowIcon() {
  return (
    <svg
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z'
        fill='currentColor'
      />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z'
        fill='currentColor'
      />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z'
        fill='currentColor'
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className='mt-auto pt-6 pb-4 flex flex-col md:flex-row justify-between items-center border-t border-neutral-200 dark:border-neutral-800'>
      <ul className='font-sm flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300 mb-4 md:mb-0'>
        <li>
          <a
            className='flex items-center justify-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100'
            rel='noopener noreferrer'
            target='_blank'
            href='/rss'
          >
            <ArrowIcon />
            <p className='ml-2 h-7 flex items-center'>rss</p>
          </a>
        </li>
        <li>
          <a
            className='flex items-center justify-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100'
            rel='noopener noreferrer'
            target='_blank'
            href='https://www.linkedin.com/in/gunn-leee'
          >
            <LinkedInIcon />
            <p className='ml-2 h-7 flex items-center'>LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            className='flex items-center justify-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100'
            rel='noopener noreferrer'
            target='_blank'
            href='https://github.com/gunn-lee'
          >
            <GitHubIcon />
            <p className='ml-2 h-7 flex items-center'>GitHub</p>
          </a>
        </li>
      </ul>
      <p className='text-neutral-600 dark:text-neutral-300 text-center md:text-right'>
        © {new Date().getFullYear()} Gunn Lee
      </p>
    </footer>
  )
}
