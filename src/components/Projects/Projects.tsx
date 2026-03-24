type ProjectItem = {
  title: string
  subtitle: string
  description: string[]
  href?: string
}

const PROJECTS: ProjectItem[] = [
  {
    title: 'Bin Buddy',
    subtitle: 'Solution Hacks - 1st Place',
    description: [
      'A full-stack app leveraging AI image classification and camera input to identify waste types, provide disposal guidance, and provide nearby disposable locations.',
      'Won 1st Place overall at TMU Solution Hacks.',
    ],
    href: 'https://devpost.com/software/bin-buddy-ld8uak?ref_content=my-projects-tab&ref_feature=my_projects',
  },
  {
    title: 'Red String',
    subtitle: 'UofT Hacks 2026',
    description: [
      'A tldraw-based web app with custom shapes and a Flask backend that creates OSINT-style investigation boards from images, handles, or emails.',
    ],
    href: 'https://devpost.com/software/redstring',
  },
  {
    title: 'SynergyBridge',
    subtitle: 'Telus X TechNation Hackathon',
    description: [
      'A full-stack FastAPI + React platform using LLMs to auto-map schemas, deduplicate records, and export unified healthcare datasets with quality insights.',
    ],
    href: 'https://github.com/BenjaminADecosta/TechnationAI/tree/main',
  },
  {
    title: 'Ontario Energy Analysis',
    subtitle: 'Data Analysis Project',
    description: [
      'A data analysis project using SQL, Python, and Tableau to evaluate Ontario’s path to a net-zero grid by 2050, revealing about 52% reliance on nuclear and roughly 79% of current energy from low-carbon sources.',
    ],
  },
  {
    title: 'Car Accident ML',
    subtitle: 'DS3 Datathon 2025',
    description: [
      'Developed machine learning solutions for three tasks: tabular classification, accident data modeling with feature selection, and image classification using pixel and hue-based features.',
    ],
  },
  {
    title: 'AML Fraud Detection',
    subtitle: 'Scotiabank Case Comp',
    description: [
      'Contributed to an AML detection system by deriving red-flag indicators, building a knowledge library, and applying clustering and ML models to identify anomalous transaction behavior.',
    ],
  },
  {
    title: 'Ability',
    subtitle: 'GenAI Genesis 2025',
    description: [
      'A SwiftUI-based app that leverages Gemini and Grok to generate Blender scripts, producing personalized 3D-printable models from user inputs and images.',
    ],
    href: 'https://devpost.com/software/ability?ref_content=my-projects-tab&ref_feature=my_projects',
  },
] as const

function ProjectRow({ project }: { project: ProjectItem }) {
  const rowContent = (
    <div className="grid gap-5 py-7 md:grid-cols-[minmax(0,260px)_1fr] md:gap-10 md:py-8">
      <div>
        <h3 className="text-[22px] font-bold leading-[0.95] text-title md:text-[26px]">
          {project.title}
        </h3>
        <p className="mt-2 text-[15px] font-semibold uppercase tracking-[0.14em] text-subtitle/62">
          {project.subtitle}
        </p>
      </div>

      <div className="space-y-2 text-[15px] font-medium leading-[1.7] text-subtitle md:text-[16px]">
        {project.description.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  )

  return (
    <article className="border-t border-white/10 first:border-t-0">
      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="group block no-underline transition-opacity duration-200 hover:opacity-100"
          aria-label={`Open ${project.title}`}
        >
          <div className="transition-transform duration-200 group-hover:translate-x-1">
            {rowContent}
          </div>
        </a>
      ) : (
        rowContent
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

      <div className="mt-10 pl-3 md:mt-12 md:pl-6">
        {PROJECTS.map((project) => (
          <ProjectRow key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
