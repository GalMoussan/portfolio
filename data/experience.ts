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
    dateRange: '2024 — Present',
    ariaLabel: '2024 to Present',
    role: 'Tech Lead, Fullstack Developer',
    company: 'Lagoonads',
    companyUrl: '#',
    description:
      'Leading the development of an affiliate marketing CRM system using Angular and Node.js. Driving architecture decisions, sprint planning, and team coordination across frontend and backend.',
    tags: ['Angular', 'Node.js', 'TypeScript', 'CRM', 'Leadership'],
    links: [],
  },
  {
    dateRange: 'Apr — Sep 2024',
    ariaLabel: 'April to September 2024',
    role: 'Fullstack Developer',
    company: '121Brokers',
    companyUrl: '#',
    description:
      'Developed and maintained a comprehensive CRM system with three user interfaces utilizing Angular, Node.js, and Firebase.',
    tags: ['Angular', 'Node.js', 'Firebase', 'CRM'],
    links: [],
  },
  {
    dateRange: 'Sep 2023 — Mar 2024',
    ariaLabel: 'September 2023 to March 2024',
    role: 'Automation Specialist',
    company: 'Netlinkz',
    companyUrl: '#',
    description:
      'Led the migration of Quality Assurance processes to an automated system using Selenium, TestNG, JavaScript, and Node.js.',
    tags: ['Selenium', 'TestNG', 'JavaScript', 'Node.js', 'QA Automation'],
    links: [],
  },
  {
    dateRange: 'Dec 2021 — 2023',
    ariaLabel: 'December 2021 to 2023',
    role: 'Fullstack Developer',
    company: 'VeracityAds',
    companyUrl: '#',
    description:
      'Built and optimized an affiliate marketing CRM system leveraging React, Python, and Node.js.',
    tags: ['React', 'Python', 'Node.js', 'CRM'],
    links: [],
  },
  {
    dateRange: 'Jan — Nov 2021',
    ariaLabel: 'January to November 2021',
    role: 'Frontend Developer',
    company: 'Tarific-Digital',
    companyUrl: '#',
    description:
      'Designed and maintained websites using React and Node.js.',
    tags: ['React', 'Node.js', 'JavaScript', 'CSS'],
    links: [],
  },
]
