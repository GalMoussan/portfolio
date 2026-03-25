export interface ProjectItem {
  name: string
  url: string
  description: string
  image: string
  imageAlt: string
  tags: string[]
  links: { label: string; url: string }[]
  stars: number | null
}

export const projects: ProjectItem[] = [
  {
    name: 'CinemaQuery',
    url: 'https://cinemaquery.vercel.app',
    description:
      'A semantic movie search engine powered by AI embeddings from OpenAI and intelligent re-ranking via Claude. Features a persona blending system that learns your preferences to deliver highly personalized movie recommendations tailored to your viewing mood.',
    image: '/images/projects/cinema-query.png',
    imageAlt: 'Screenshot of CinemaQuery movie search application',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'OpenAI', 'Claude', 'pgvector', 'Prisma'],
    links: [
      { label: 'GitHub', url: 'https://github.com/galmoussan/cinemaquery' },
      { label: 'Live Site', url: 'https://cinemaquery.vercel.app' },
    ],
    stars: null,
  },
  {
    name: 'Snake',
    url: 'https://snake-pi-gray.vercel.app',
    description:
      'A classic Snake game built with TypeScript and HTML5 Canvas, demonstrating modern web development practices. Features smooth controls, progressive difficulty, persistent high scores, and a retro arcade aesthetic. Implemented with a modular entity-component-system architecture, comprehensive testing (80%+ coverage), and immutable data patterns.',
    image: '/images/projects/snake.png',
    imageAlt: 'Screenshot of Snake game',
    tags: ['TypeScript', 'HTML5 Canvas', 'Vite', 'Vitest', 'Playwright'],
    links: [
      { label: 'GitHub', url: 'https://github.com/GalMoussan/Snake' },
      { label: 'Live Site', url: 'https://snake-pi-gray.vercel.app' },
    ],
    stars: null,
  },
  {
    name: 'CIM',
    url: 'https://github.com/GalMoussan/CIM',
    description:
      'A content intelligence manager that streamlines editorial workflows. Helps teams plan, organize, and track content pipelines with a clean kanban-style interface and AI-assisted content suggestions.',
    image: '/images/projects/cim.png',
    imageAlt: 'Screenshot of CIM content intelligence manager',
    tags: ['TypeScript', 'Next.js', 'React'],
    links: [{ label: 'GitHub', url: 'https://github.com/GalMoussan/CIM' }],
    stars: null,
  },
  {
    name: 'X Intelligence Pipeline',
    url: 'https://github.com/GalMoussan/x-intelligence-pipeline',
    description:
      'An automated data pipeline that ingests posts from X (Twitter), processes them through NLP enrichment, and surfaces actionable intelligence signals. Useful for trend monitoring and audience research.',
    image: '/images/projects/x-pipeline.png',
    imageAlt: 'Screenshot of X Intelligence Pipeline',
    tags: ['Python', 'NLP', 'Data Pipeline'],
    links: [{ label: 'GitHub', url: 'https://github.com/GalMoussan/x-intelligence-pipeline' }],
    stars: null,
  },
  {
    name: 'ReelSearch',
    url: 'https://github.com/GalMoussan/reelSearch',
    description:
      'A modern movie and TV show discovery app with an intuitive search interface, detailed metadata, and personalized watchlist management. Built with a focus on fast search UX and clean visual design.',
    image: '/images/projects/reel-search.png',
    imageAlt: 'Screenshot of ReelSearch movie discovery app',
    tags: ['TypeScript', 'React', 'Tailwind CSS'],
    links: [{ label: 'GitHub', url: 'https://github.com/GalMoussan/reelSearch' }],
    stars: null,
  },
  {
    name: 'movieSearch',
    url: 'https://github.com/GalMoussan/movieSearch',
    description:
      'A fresh take on movie discovery — search films and TV shows in a new way with a sleek interface and rich metadata from public APIs.',
    image: '/images/projects/moviesearch.png',
    imageAlt: 'Screenshot of movieSearch application',
    tags: ['TypeScript', 'React'],
    links: [{ label: 'GitHub', url: 'https://github.com/GalMoussan/movieSearch' }],
    stars: null,
  },
  {
    name: 'Content Factory',
    url: 'https://github.com/GalMoussan/Content-factory',
    description:
      'AI-powered content creation engine with zero human touch. Automates the full content lifecycle from ideation to publishing using LLM pipelines.',
    image: '/images/projects/content-factory.png',
    imageAlt: 'Screenshot of Content Factory',
    tags: ['TypeScript', 'Next.js', 'AI/LLM APIs'],
    links: [{ label: 'GitHub', url: 'https://github.com/GalMoussan/Content-factory' }],
    stars: null,
  },
  {
    name: 'InfluencerBuddy',
    url: 'https://github.com/GalMoussan/InfluencerBuddy',
    description:
      'An AI-driven assistant for influencer marketing — helps creators and brands streamline outreach, track campaigns, and analyze engagement.',
    image: '/images/projects/influencerbuddy.png',
    imageAlt: 'Screenshot of InfluencerBuddy',
    tags: ['TypeScript', 'React', 'AI/LLM APIs'],
    links: [{ label: 'GitHub', url: 'https://github.com/GalMoussan/InfluencerBuddy' }],
    stars: null,
  },
  {
    name: 'Pocket Ask',
    url: 'https://github.com/GalMoussan/MUSITSAP',
    description:
      'WhatsApp AI assistant that intercepts private messages and responds using OpenAI GPT-3.5. Features conversation context management, rate limiting, and customizable prompts for intelligent WhatsApp automation.',
    image: '/images/projects/pocket-ask.png',
    imageAlt: 'Screenshot of Pocket Ask WhatsApp assistant',
    tags: ['Node.js', 'TypeScript', 'OpenAI', 'SQLite', 'WhatsApp Web'],
    links: [{ label: 'GitHub', url: 'https://github.com/GalMoussan/MUSITSAP' }],
    stars: null,
  },
  {
    name: 'MySassy',
    url: 'https://github.com/GalMoussan/MySassy',
    description:
      'A complete SaaS template generator with pre-built authentication (Google, Facebook, Twitter OAuth), Stripe subscription management, payment processing, and user dashboards. Eliminates months of boilerplate development for subscription-based businesses.',
    image: '/images/projects/mysassy.png',
    imageAlt: 'Screenshot of MySassy SaaS template',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'TailwindCSS', 'Mailgun'],
    links: [{ label: 'GitHub', url: 'https://github.com/GalMoussan/MySassy' }],
    stars: null,
  },
  {
    name: 'LeadsFactory',
    url: 'https://github.com/GalMoussan/LeadsFactory',
    description:
      'A backend system for automated lead discovery and organization — scrapes, enriches, and structures lead data for sales pipelines.',
    image: '/images/projects/leadsfactory.png',
    imageAlt: 'Screenshot of LeadsFactory',
    tags: ['Python'],
    links: [{ label: 'GitHub', url: 'https://github.com/GalMoussan/LeadsFactory' }],
    stars: null,
  },
  {
    name: 'StudyBuddy',
    url: 'https://github.com/GalMoussan/TelStudy',
    description:
      'A study enhancement app that helps users learn more effectively with structured sessions, progress tracking, and spaced repetition tools.',
    image: '/images/projects/studybuddy.png',
    imageAlt: 'Screenshot of StudyBuddy learning app',
    tags: ['TypeScript', 'React'],
    links: [{ label: 'GitHub', url: 'https://github.com/GalMoussan/TelStudy' }],
    stars: null,
  },
  {
    name: 'invert-chrome-extension',
    url: 'https://github.com/GalMoussan/invert-chrome-extension',
    description:
      'A lightweight Chrome extension that inverts web page colors for improved readability in low-light environments or for accessibility needs.',
    image: '/images/projects/invert-extension.png',
    imageAlt: 'Screenshot of invert-chrome-extension',
    tags: ['JavaScript'],
    links: [{ label: 'GitHub', url: 'https://github.com/GalMoussan/invert-chrome-extension' }],
    stars: null,
  },
  {
    name: 'Social Net',
    url: 'https://github.com/GalMoussan/Family-net',
    description:
      'A private social network for family and close friends — share posts, photos, and updates in a safe, closed community space.',
    image: '/images/projects/social-net.png',
    imageAlt: 'Screenshot of Social Net private network',
    tags: ['TypeScript', 'React'],
    links: [{ label: 'GitHub', url: 'https://github.com/GalMoussan/Family-net' }],
    stars: null,
  },
]
