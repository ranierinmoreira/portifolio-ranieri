import { profile } from '../data/portfolio'

export default function Contact() {
  const { social } = profile
  const hasTwitter = social.twitter && social.twitter.trim() !== ''

  return (
    <section id="contato" className="section contact">
      <div className="container">
        <h2 className="section__title">
          <span className="section__number">04.</span>
          Contato
        </h2>
        <div className="contact__content">
          <p className="contact__text">
            Estou aberto a novas oportunidades e projetos interessantes.
            Se quiser conversar ou tem alguma ideia em mente, entre em contato!
          </p>
          <a href={`mailto:${profile.email}`} className="contact__email">
            {profile.email}
          </a>
          <div className="contact__social">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            {hasTwitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
                aria-label="Twitter"
              >
                Twitter
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
