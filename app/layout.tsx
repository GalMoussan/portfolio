import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gal Moussan — Full-Stack Developer',
  description:
    'Gal Moussan is a full-stack developer building fast, accessible, and beautifully crafted digital experiences for the web.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body
        className="bg-slate-900 font-sans leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {children}
      </body>
    </html>
  )
}
