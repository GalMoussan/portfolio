export interface ExperienceItem {
  dateRange: string
  ariaLabel: string
  role: string
  company: string
  companyUrl: string
  description: string
  tags: string[]
  links: { label: string; url: string }[]
}

export const experience: ExperienceItem[] = [
  {
    dateRange: '2022 — Present',
    ariaLabel: '2022 to Present',
    role: 'Freelance Full-Stack Developer',
    company: 'Self-Employed',
    companyUrl: 'https://github.com/galmoussan',
    description:
      'Design and develop full-stack web applications and promotional websites for clients across multiple industries. Scope includes UI/UX planning, frontend development with React and Next.js, backend integrations, and deployment pipelines on Vercel and Netlify.',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vercel'],
    links: [],
  },
  {
    dateRange: '2021 — 2022',
    ariaLabel: '2021 to 2022',
    role: 'Frontend Developer',
    company: 'Web Agency',
    companyUrl: '#',
    description:
      'Built responsive marketing websites and landing pages for agency clients. Worked closely with designers to translate Figma mockups into pixel-perfect HTML/CSS/JS implementations. Maintained and optimized existing client sites for performance and SEO.',
    tags: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Figma', 'SCSS'],
    links: [],
  },
  {
    dateRange: '2019 — 2021',
    ariaLabel: '2019 to 2021',
    role: 'Junior Web Developer',
    company: 'Startup',
    companyUrl: '#',
    description:
      'Contributed to frontend development of a SaaS dashboard product. Implemented new UI features, fixed cross-browser bugs, and improved page load performance. Collaborated in an agile team using Git workflows and code reviews.',
    tags: ['JavaScript', 'React', 'CSS', 'REST APIs', 'Git'],
    links: [],
  },
]
