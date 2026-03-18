const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aathithya-ananth/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current md:h-7 md:w-7">
        <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9h4v12H3zm7 0h3.83v1.64h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.12V21h-4v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95V21h-4z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/XDAathi',
    icon: (
      <svg viewBox="0 0 16 16" aria-hidden="true" className="h-6 w-6 fill-current md:h-7 md:w-7">
        <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
      </svg>
    ),
  },
] as const

export default function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-screen px-6 pt-20 md:px-16 max-w-[1200px] mx-auto w-full">
      <div className="flex w-fit flex-col">
        <h1 className="mb-3 text-[28px] font-bold leading-[1.15] tracking-[-0.5px] text-title md:text-[42px]">
          Heyo, I'm Aathi
        </h1>
        <p className="text-[16px] font-normal leading-[1.4] text-subtitle md:text-[24px]">
          2nd year Stats and Econ @ University of Toronto
        </p>

        <div className="mt-8 flex w-full items-center gap-6">
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="inline-flex h-7 w-7 items-center justify-center text-title no-underline transition-colors duration-200 hover:text-white md:h-9 md:w-9"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
