type ProjectItem = {
  title: string
  subtitle: string
  description: string[]
  href?: string
  badge: {
    src: string
    alt: string
  }
}

const PROJECTS: ProjectItem[] = [
  {
    title: 'Bin Buddy',
    subtitle: 'Solution Hacks - 1st Place',
    description: [
      "A full-stack app leveraging AI image classification and camera input to identify waste types, provide disposal guidance, and provide nearby disposable locations.",
      "Won 1st Place overall at TMU Solution Hacks."
    ],
    href: 'https://devpost.com/software/bin-buddy-ld8uak?ref_content=my-projects-tab&ref_feature=my_projects',
    badge: {
      src: '/binbuddy.png',
      alt: 'Bin Buddy project image',
    },
  },
  {
    title: 'Red String',
    subtitle: 'UofT Hacks 2026',
    description: [
      'A tldraw-based web app with custom shapes and a Flask backend that creates OSINT-style investigation boards from images, handles, or emails.',
    ],
    href: 'https://devpost.com/software/redstring',
    badge: {
      src: '/redstring.png',
      alt: 'redstring board',
    },
  },
  {
    title: 'SynergyBridge',
    subtitle: 'Telus X TechNation Hackathon',
    description: [
      'A full-stack FastAPI + React platform using LLMs to auto-map schemas, deduplicate records, and export unified healthcare datasets with quality insights.',
    ],
    href: 'https://github.com/BenjaminADecosta/TechnationAI/tree/main',
    badge: {
      src: '/telus.png',
      alt: 'landing page of website',
    },
  },
  // {
  //   title: 'Wordle',
  //   subtitle: 'Software Design Course Group Project',
  //   description: [
  //     'A Java Wordle implementation applying object-oriented design, UML modeling, and clean architecture principles for maintainability.',
  //   ],
  //   href: '',
  //   badge: {
  //     src: '/wordle.png',
  //     alt: 'Wordle landing page',
  //   },
  // },
    {
    title: 'Ontario Energy Analysis',
    subtitle: 'Data Analysis Project',
    description: [
      'A data analysis project using SQL, Python, and Tableau to evaluate Ontario’s path to a net-zero grid by 2050, revealing ~52% reliance on nuclear and ~79% of current energy from low-carbon sources.',
    ],
    href: '',
    badge: {
      src: '/ieso.png',
      alt: 'postgres dashboard',
    },
  },
     {
    title: 'Car Accident ML',
    subtitle: 'DS3 Datathon 2025',
    description: [
      'Developed machine learning solutions for three tasks: tabular classification (95% accuracy), accident data modeling with feature selection (93%), and image classification using pixel/hue-based features.',
    ],
    href: '',
    badge: {
      src: '/ds3.png',
      alt: 'leaderboard',
    },
  },
     {
    title: 'AML Fraud Detection',
    subtitle: 'Scotiabank Case Comp',
    description: [
      'Contributed to an AML detection system by deriving red-flag indicators, building a knowledge library, and applying clustering and ML models to identify anomaly transaction behaviors.',
    ],
    href: '',
    badge: {
      src: '/aml.png',
      alt: 'postgres dashboard',
    },
  },
  {
    title: 'Ability',
    subtitle: 'GenAI Genesis 2025',
    description: [
      'A SwiftUI-based app that leverages Gemini and Grok to generate Blender (bpy) scripts, producing personalized 3D-printable models from user inputs and images.',
    ],
    href: 'https://devpost.com/software/ability?ref_content=my-projects-tab&ref_feature=my_projects',
    badge: {
      src: '/ability_intro5.png',
      alt: 'postgres dashboard',
    },
  },
] as const

function ProjectBadge({ src, alt }: ProjectItem['badge']) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full rounded-full object-cover"
      draggable="false"
    />
  )
}

function ProjectCard({ project }: { project: ProjectItem }) {
  const card = (
    <div className="min-h-[330px] rounded-[44px] border border-white/14 bg-[#29292c] px-8 pb-10 pt-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset,0_18px_40px_rgba(215,235,233,0.03)]">
      <h3 className="max-w-[230px] text-[28px] font-bold leading-[0.95] text-title">
        {project.title}
      </h3>

      <p className="mt-2 text-[17px] font-semibold text-subtitle/72">
        {project.subtitle}
      </p>

      <div className="mt-8 space-y-1.5 text-[16px] font-semibold leading-[1.55] text-subtitle">
        {project.description.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  )

  return (
    <article className="relative mx-auto w-[348px] pt-8 md:w-[360px]">
      <div className="absolute right-[-10px] top-0 z-10 h-[88px] w-[88px] overflow-hidden rounded-full border border-white/16 bg-white/7 shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-xl">
        <ProjectBadge {...project.badge} />
      </div>

      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="block no-underline"
          aria-label={`Open ${project.title}`}
        >
          {card}
        </a>
      ) : (
        card
      )}
    </article>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-6 py-18 md:px-16 md:py-24"
    >
      <h2 className="text-[29px] font-bold text-title md:text-[37px]">
        Projects
      </h2>

      <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-3 md:gap-14">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} project={project} />
        ))}
      </div>
    </section>
  )
}
