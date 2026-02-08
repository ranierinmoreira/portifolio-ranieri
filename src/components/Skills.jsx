import { skills, tools } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="habilidades" className="section skills">
      <div className="container">
        <h2 className="section__title">
          <span className="section__number">02.</span>
          Habilidades
        </h2>
        <div className="skills__grid">
          <div className="skills__list">
            {skills.map(({ name, level }) => (
              <div key={name} className="skill">
                <div className="skill__header">
                  <span className="skill__name">{name}</span>
                  <span className="skill__percent">{level}%</span>
                </div>
                <div className="skill__bar">
                  <div
                    className="skill__fill"
                    style={{ width: `${level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="skills__tools">
            <h3 className="skills__subtitle">Ferramentas</h3>
            <div className="tools__tags">
              {tools.map((tool) => (
                <span key={tool} className="tool-tag">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
