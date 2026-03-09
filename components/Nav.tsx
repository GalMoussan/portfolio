'use client'

import { useState, useEffect } from 'react'

const sections = ['About', 'Experience', 'Projects']

export default function Nav() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '0px 0px -60% 0px', threshold: 0.1 }
    )

    for (const section of sections) {
      const el = document.getElementById(section.toLowerCase())
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {sections.map((section) => {
          const isActive = activeSection === section.toLowerCase()
          return (
            <li key={section}>
              <a
                className="group flex items-center py-3"
                href={`#${section.toLowerCase()}`}
              >
                <span
                  className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
                    isActive
                      ? 'w-16 bg-slate-200'
                      : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
                  }`}
                />
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest ${
                    isActive
                      ? 'text-slate-200'
                      : 'text-slate-500 group-hover:text-slate-200'
                  }`}
                >
                  {section}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
