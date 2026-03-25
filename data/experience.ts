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
    dateRange: 'Sep 2024 — Present',
    ariaLabel: 'September 2024 to Present',
    role: 'Tech Lead, Fullstack Developer',
    company: 'Lagoonads',
    companyUrl: 'https://www.lagoonads.com/',
    description:
      'Leading the development of an affiliate marketing CRM system using Angular and Node.js. Architecting scalable solutions and making key technical decisions for the platform. Managing development workflows and mentoring team members. Building and optimizing features for tracking, reporting, and affiliate management.',
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
      'Built a full-featured CRM platform with three distinct user interfaces for brokers, managers, and administrators. Developed complex financial workflows, client management features, and real-time data synchronization. Worked with Angular, Node.js, Firebase, and TypeScript in a fast-paced startup environment.',
    tags: ['Angular', 'Node.js', 'Firebase', 'TypeScript', 'CRM'],
    links: [],
  },
  {
    dateRange: 'Sep 2023 — Mar 2024',
    ariaLabel: 'September 2023 to March 2024',
    role: 'Automation Specialist',
    company: 'Netlinkz',
    companyUrl: '#',
    description:
      'Led the migration of manual QA processes to a fully automated testing pipeline. Built a robust automation framework using Selenium, TestNG, JavaScript, and Node.js. Dramatically reduced regression testing time and improved deployment confidence. Created real-time dashboards for monitoring test execution and results.',
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
      'Built and optimized a full-stack affiliate marketing CRM system with campaign management and analytics. Developed real-time reporting capabilities and performance tracking dashboards. Worked across the stack with React, Python, and Node.js. Collaborated with product and marketing teams to deliver data-driven features.',
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
      'Designed and maintained multiple client-facing websites with responsive layouts and modern UI patterns. Optimized website performance and ensured cross-browser compatibility. Worked with React, Node.js, and CSS to deliver polished user experiences.',
    tags: ['React', 'Node.js', 'JavaScript', 'CSS'],
    links: [],
  },
  {
    dateRange: 'Aug 2016 — Aug 2020',
    ariaLabel: 'August 2016 to August 2020',
    role: 'Officer & Company Commander',
    company: 'Israeli Air Force',
    companyUrl: '#',
    description:
      'Served as an officer and company commander, leading teams in high-pressure operational environments. Developed strong strategic thinking, decision-making, and team management skills. Managed complex logistics and coordinated multi-team operations.',
    tags: ['Leadership', 'Team Management', 'Strategic Planning'],
    links: [],
  },
]
