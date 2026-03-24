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
      'Next Best Action Delivery Management',
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
      'Built Python automation pipelines integrating member-mapping APIs with website and CRM systems to streamline data workflows.',
      'Implementing AI solutions into everyday tasks.',
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
      'Co-led a 12-person team, filming reels and running marketing promotions to hype up club events.',
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

function ExperienceRow({ item }: { item: ExperienceItem }) {
  return (
    <article className="border-t border-white/10 first:border-t-0">
      <div className="grid gap-5 py-7 md:grid-cols-[88px_minmax(0,250px)_1fr] md:items-center md:gap-10 md:py-8">
        <div className="flex justify-start md:items-center">
          <div className="h-[72px] w-[72px] overflow-hidden rounded-full border border-white/16 bg-white/7 shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
            <Badge {...item.badge} />
          </div>
        </div>

        <div className="md:self-center">
          <h3 className="text-[22px] font-bold leading-[0.95] text-title md:text-[26px]">
            {item.title}
          </h3>
          <p className="mt-2 text-[15px] font-semibold uppercase tracking-[0.14em] text-subtitle/62">
            {item.season}
          </p>
        </div>

        <div className="space-y-2 text-[15px] font-medium leading-[1.7] text-subtitle md:self-center md:text-[16px]">
          {item.description.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </article>
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

      <div className="mt-10 pl-3 md:mt-12 md:pl-6">
        {EXPERIENCE_ITEMS.map((item) => (
          <ExperienceRow key={item.title} item={item} />
        ))}
      </div>
    </section>
  )
}
