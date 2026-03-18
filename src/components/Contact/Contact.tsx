import SpotifyPlaylistBanner from './SpotifyPlaylistBanner'

const CONTACT_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aathithya-ananth/',
    text: 'Aathithya Ananth',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current md:h-8 md:w-8">
        <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9h4v12H3zm7 0h3.83v1.64h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.12V21h-4v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95V21h-4z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/XDAathi',
    text: 'XDAathi',
    icon: (
      <svg viewBox="0 0 16 16" aria-hidden="true" className="h-7 w-7 fill-current md:h-8 md:w-8">
        <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:aathithyaananth@gmail.com',
    text: 'aathithyaananth@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current md:h-8 md:w-8">
        <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25Zm1.78-.53 7.44 5.58a.9.9 0 0 0 1.06 0l7.44-5.58A.75.75 0 0 0 19.5 6h-15a.75.75 0 0 0-.47.22Zm16.22 1.5-6.83 5.12a2.4 2.4 0 0 1-2.84 0L3.75 7.72v9.53c0 .41.34.75.75.75h15a.75.75 0 0 0 .75-.75Z" />
      </svg>
    ),
  },
] as const

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col justify-center px-6 py-18 md:px-16 md:py-24"
    >
      <h2 className="text-[29px] font-bold text-title md:text-[37px]">
        Contact
      </h2>

      <p className="mt-4 max-w-[540px] text-[16px] leading-[1.6] text-subtitle md:text-[20px]">
        If you want to chat about internships, projects, or anything I&apos;m building, feel free to reach out :)
      </p>

      <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,460px)_minmax(320px,420px)] lg:justify-between">
        <div className="flex flex-col gap-5">
          {CONTACT_LINKS.map(({ label, href, text, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
              aria-label={label}
              className="inline-flex items-center gap-4 text-title no-underline transition-[color,text-shadow] duration-200 hover:text-white hover:[text-shadow:0_0_18px_rgba(215,235,233,0.22)]"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center md:h-11 md:w-11">
                {icon}
              </span>
              <span className="text-[16px] text-subtitle md:text-[18px]">
                {text}
              </span>
            </a>
          ))}
        </div>

        <div className="w-full max-w-[420px] self-start justify-self-start lg:mt-[-164px] lg:justify-self-end">
          <SpotifyPlaylistBanner />
        </div>
      </div>
    </section>
  )
}
