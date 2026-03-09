import Spotlight from '@/components/Spotlight'
import Nav from '@/components/Nav'
import SocialIcons from '@/components/SocialIcons'
import ExperienceItem from '@/components/ExperienceItem'
import ProjectCard from '@/components/ProjectCard'
import { about } from '@/data/about'
import { experience } from '@/data/experience'
import { projects } from '@/data/projects'

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default function Home() {
  return (
    <Spotlight>
      <a
        href="#content"
        className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
      >
        Skip to Content
      </a>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Column — Sticky Header */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">Gal Moussan</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Tech Lead &amp; Full-Stack Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I build CRM systems, web applications, and automation tools
                for startups — from architecture to deployment.
              </p>
              <Nav />
            </div>
            <SocialIcons />
          </header>

          {/* Right Column — Scrollable Content */}
          <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            {/* About */}
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="About me"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  About
                </h2>
              </div>
              <div>
                {about.map((paragraph, i) => (
                  <p key={i} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Work experience"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Experience
                </h2>
              </div>
              <div>
                <ol className="group/list">
                  {experience.map((item) => (
                    <ExperienceItem key={item.dateRange} item={item} />
                  ))}
                </ol>
                <div className="mt-12">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="View Full Résumé (opens in a new tab)"
                    className="group/link inline-flex items-baseline text-base font-semibold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  >
                    <span>
                      View Full Résumé
                      <ArrowIcon />
                    </span>
                  </a>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Selected projects"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Projects
                </h2>
              </div>
              <div>
                <ul className="group/list">
                  {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                  ))}
                </ul>
                <div className="mt-12">
                  <a
                    href="https://github.com/GalMoussan?tab=repositories"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="View Full Project Archive (opens in a new tab)"
                    className="group/link inline-flex items-baseline text-base font-semibold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  >
                    <span>
                      View Full Project Archive
                      <ArrowIcon />
                    </span>
                  </a>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>
                Coded in{' '}
                <a
                  href="https://code.visualstudio.com"
                  className="font-medium text-slate-400 hover:text-teal-300 transition"
                >
                  Visual Studio Code
                </a>{' '}
                by yours truly. Built with{' '}
                <a
                  href="https://nextjs.org"
                  className="font-medium text-slate-400 hover:text-teal-300 transition"
                >
                  Next.js
                </a>{' '}
                and{' '}
                <a
                  href="https://tailwindcss.com"
                  className="font-medium text-slate-400 hover:text-teal-300 transition"
                >
                  Tailwind CSS
                </a>
                , deployed with{' '}
                <a
                  href="https://vercel.com"
                  className="font-medium text-slate-400 hover:text-teal-300 transition"
                >
                  Vercel
                </a>
                . All text is set in the{' '}
                <a
                  href="https://rsms.me/inter"
                  className="font-medium text-slate-400 hover:text-teal-300 transition"
                >
                  Inter
                </a>{' '}
                typeface.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </Spotlight>
  )
}
