import GlassSurface from '@/components/GlassSurface'

type ExperienceItem = {
  title: string
  season: string
  description: string[]
  badge: {
    src: string
    alt: string
  }
}

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    title: 'Data Analyst Intern',
    season: 'Summer 2026 - Fall 2026',
    description: [
      'Joining Personal Banking',
      'Next Best Action Delivery Management'
    ],
    badge: {
      src: '/rbc.jpg',
      alt: 'RBC logo',
    },
  },
  {
    title: 'Data Analytics & AI Intern',
    season: 'Winter 2026',
    description: [
      "Built Python automation pipelines integrating member-mapping APIs with website and CRM systems to streamline data workflows.",
      'Implementing AI Solutions into everyday tasks.',
    ],
    badge: {
      src: '/ocni3.png',
      alt: 'OCNI logo',
    },
  },
  {
    title: 'Marketing Lead',
    season: 'Summer 2025 - 2026',
    description: [
      'Marketing lead @Google Developer Student Group at UTSC.',
      'Co-Led a 12-person team, filming reels and running marketing promotions to hype up club events!',
    ],
    badge: {
      src: '/gdg.png',
      alt: 'Google Developer Group logo',
    },
  },
]

function Badge({ src, alt }: ExperienceItem['badge']) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full rounded-full object-cover"
      draggable="false"
    />
  )
}

function ExperienceCard({ title, season, description, badge }: ExperienceItem) {
  return (
    <div className="relative mx-auto w-[348px] pt-8 md:mx-0 md:w-[360px]">
      <div className="absolute right-[-10px] top-0 z-10 h-[88px] w-[88px] overflow-hidden rounded-full border border-white/16 bg-white/7 shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-xl">
        <Badge {...badge} />
      </div>

      <GlassSurface
        width={360}
        height={330}
        borderRadius={44}
        backgroundOpacity={0.2}
        saturation={1.02}
        borderWidth={0.045}
        brightness={28}
        opacity={0.6}
        blur={5}
        displace={0.2}
        distortionScale={-72}
        redOffset={0}
        greenOffset={4}
        blueOffset={8}
        className="border border-white/13"
      >
        <div className="flex h-[330px] flex-col px-8 pb-10 pt-8 text-left">
          <h3 className="max-w-[230px] text-[28px] font-bold leading-[0.95] text-title">
            {title}
          </h3>

          <p className="mt-2 text-[17px] font-semibold text-subtitle/72">
            {season}
          </p>

          <div className="mt-8 space-y-1.5 text-[16px] font-semibold leading-[1.55] text-subtitle">
            {description.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </GlassSurface>
    </div>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-6 py-18 md:px-16 md:py-24"
    >
      <h2 className="text-[29px] font-bold text-title md:text-[37px]">
        Experience
      </h2>

      <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-3 md:gap-14">
        {EXPERIENCE_ITEMS.map((item) => (
          <ExperienceCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}
