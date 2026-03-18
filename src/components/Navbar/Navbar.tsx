import GlassSurface from '@/components/GlassSurface'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-fit max-w-[calc(100%-24px)] md:max-w-[calc(100%-48px)]">
      <GlassSurface
        width="fit-content"
        height="100%"
        borderRadius={50}
        backgroundOpacity={0.24}
        saturation={1.15}
        borderWidth={0.05}
        brightness={38}
        opacity={0.72}
        blur={7}
        displace={0.35}
        distortionScale={-110}
        redOffset={0}
        greenOffset={6}
        blueOffset={12}
        className="!justify-center"
      >
        <ul className="flex w-fit items-center justify-center list-none gap-3.5 px-4 py-2.5 md:gap-8 md:px-7 md:py-3.5">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="group relative text-[13px] md:text-[16px] font-medium text-subtitle no-underline tracking-[0.2px] transition-colors duration-250 hover:text-title"
              >
                {label}
                <span className="absolute bottom-[-4px] left-0 h-[1.5px] w-0 bg-title transition-all duration-300 ease-in-out group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </GlassSurface>
    </nav>
  )
}
