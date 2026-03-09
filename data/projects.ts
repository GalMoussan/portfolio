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
    name: 'Personal Portfolio',
    url: 'https://galmoussan.github.io',
    description:
      'This portfolio site — built with Next.js, TypeScript, and Tailwind CSS. Features a mouse spotlight effect, IntersectionObserver-driven active nav, and animated hover cards. Deployed to Vercel.',
    image: '/images/projects/portfolio.png',
    imageAlt: 'Screenshot of Gal Moussan portfolio website',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    links: [],
    stars: null,
  },
  {
    name: 'Forever Aloe Vera — Promotional Website',
    url: 'https://galmoussan.github.io/forever-aloe',
    description:
      'A single-file HTML promotional landing page for an aloe vera product line. Features animated hero section, testimonial carousel, glassmorphism UI elements, and smooth scroll interactions.',
    image: '/images/projects/forever.png',
    imageAlt: 'Screenshot of Forever aloe vera promotional website',
    tags: ['HTML', 'CSS', 'JavaScript', 'Animations'],
    links: [],
    stars: null,
  },
  {
    name: "2D Roguelite Beat 'em Up (Unity)",
    url: 'https://github.com/galmoussan',
    description:
      "A 2D side-scrolling roguelite beat 'em up built in Unity. Features a cast of distinct characters with 14+ animation states each, procedural level design, and a full roster of original enemy monsters including vegetable-themed bosses.",
    image: '/images/projects/roguelite.png',
    imageAlt: 'Screenshot of 2D roguelite beat em up game',
    tags: ['Unity', 'C#', 'Game Design', '2D Animation', 'Sprite Art'],
    links: [],
    stars: null,
  },
  {
    name: 'AI Animation Prompt Library',
    url: 'https://github.com/galmoussan',
    description:
      'A structured, template-based animation prompt library for AI image generation (SuperGrok). Covers 14+ animation states per character, with tested solutions for common issues like limb visibility, directional framing, and effect layering.',
    image: '/images/projects/promptlib.png',
    imageAlt: 'Preview of AI animation prompt library documentation',
    tags: ['AI', 'Prompt Engineering', 'SuperGrok', 'Animation'],
    links: [],
    stars: null,
  },
]
