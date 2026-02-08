import { useState, useEffect } from 'react'
import { profile } from '../data/portfolio'

const links = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
]

export default function Header({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(id)
    setMobileMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <nav className="nav">
        <a href="#inicio" className="nav__logo" onClick={(e) => { e.preventDefault(); scrollToSection('inicio') }}>
          {'<'}{profile.name}{' />'}
        </a>

        <button
          className="nav__toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <span className={mobileMenuOpen ? 'nav__toggle-bar nav__toggle-bar--open' : 'nav__toggle-bar'} />
          <span className={mobileMenuOpen ? 'nav__toggle-bar nav__toggle-bar--open' : 'nav__toggle-bar'} />
          <span className={mobileMenuOpen ? 'nav__toggle-bar nav__toggle-bar--open' : 'nav__toggle-bar'} />
        </button>

        <ul className={`nav__links ${mobileMenuOpen ? 'nav__links--open' : ''}`}>
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`nav__link ${activeSection === id ? 'nav__link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(id) }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
