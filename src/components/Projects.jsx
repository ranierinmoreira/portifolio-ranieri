import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projetos" className="section projects">
      <div className="container">
        <h2 className="section__title">
          <span className="section__number">03.</span>
          Projetos
        </h2>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-card__image">
                <div className="project-card__placeholder">
                  <span>Projeto {index + 1}</span>
                </div>
              </div>
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-card__tag">{tag}</span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  Ver projeto →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
