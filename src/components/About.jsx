import { profile, about } from '../data/portfolio'

export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container">
        <h2 className="section__title">
          <span className="section__number">01.</span>
          Sobre mim
        </h2>
        <div className="about__grid">
          <div className="about__text">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              Baixar Currículo
            </a>
          </div>
          <div className="about__image">
            <div className="about__image-frame">
              <div className="about__image-placeholder">
                <span>Foto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
