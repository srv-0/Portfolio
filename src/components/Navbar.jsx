import { useState, useEffect } from 'react'
import { meta } from '../data/portfolio'

const links = [
  { label: 'About',        href: '#about'          },
  { label: 'Skills',       href: '#skills'         },
  { label: 'Projects',     href: '#projects'       },
  { label: 'GitHub',       href: '#github'         },
  { label: 'Experience',   href: '#experience'     },
  { label: 'Education',    href: '#education'      },
  { label: 'Achievements', href: '#achievements'   },
  { label: 'Contact',      href: '#contact'        },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const s = window.scrollY
      setScrolled(s > 60)
      const h = document.body.scrollHeight - window.innerHeight
      setProgress(h > 0 ? (s / h) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleResume = (e) => {
    e.preventDefault()
    if (!meta.resumeUrl) {
      alert('Resume URL not set yet.\n\nAdd it in src/data/portfolio.js → meta.resumeUrl')
      return
    }
    window.open(meta.resumeUrl, '_blank')
  }

  return (
    <>
      {/* scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[9999] transition-all duration-100"
        style={{ width: `${progress}%`, background: 'linear-gradient(90deg,#6366f1,#22d3ee)' }}
      />

      <nav className={`fixed top-0 left-0 right-0 z-[999] px-8 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-[#05060f]/90 backdrop-blur-xl border-b border-white/[0.06]' : ''
      }`}>
        <a href="#hero" className="text-lg font-bold tracking-tight accent-gradient">
          Saurav Singh
        </a>

        {/* desktop links */}
        <ul className="hidden lg:flex items-center gap-7 list-none">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}
                className="text-t2 text-[13px] font-medium hover:text-t1 transition-colors duration-200 relative group">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-200" />
              </a>
            </li>
          ))}
        </ul>

        <a href="#" onClick={handleResume}
          className="hidden lg:inline-flex btn-primary text-sm py-2 px-5">
          Resume ↓
        </a>

        {/* hamburger */}
        <button className="lg:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(o => !o)}>
          <span className={`block w-5 h-px bg-t2 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-t2 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-t2 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 top-[65px] z-[998] bg-[#05060f]/97 backdrop-blur-xl flex flex-col p-8 gap-5 lg:hidden">
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-t1 text-xl font-medium py-3 border-b border-white/[0.06] hover:text-accent-2 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#" onClick={handleResume} className="btn-primary text-center mt-4">Resume ↓</a>
        </div>
      )}
    </>
  )
}
