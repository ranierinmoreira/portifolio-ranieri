import { profile } from '../data/portfolio'

export default function Hero({ setActiveSection }) {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection('contato')
  }

  return (
    <section id="inicio" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__content">
        <p className="hero__greeting hero__animate" style={{ animationDelay: '0.1s' }}>
          Olá, eu sou
        </p>
        <h1 className="hero__name hero__animate" style={{ animationDelay: '0.2s' }}>
          {profile.name}
        </h1>
        <div className="hero__name-line hero__animate" style={{ animationDelay: '0.35s' }} aria-hidden="true" />
        <p className="hero__title hero__animate" style={{ animationDelay: '0.4s' }}>
          {profile.role}
        </p>
        {profile.tagline && (
          <p className="hero__tagline hero__animate" style={{ animationDelay: '0.5s' }}>
            {profile.tagline}
          </p>
        )}
        <p className="hero__description hero__animate" style={{ animationDelay: '0.6s' }}>
          {profile.description}
        </p>
        <div className="hero__actions hero__animate" style={{ animationDelay: '0.8s' }}>
          <button className="btn btn--primary" onClick={scrollToContact}>
            Entre em Contato
          </button>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            Ver GitHub
          </a>
        </div>
      </div>
      <div className="hero__scroll">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
