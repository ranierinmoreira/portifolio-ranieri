import { profile } from '../data/portfolio'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">
          Feito com ❤️ por {profile.name} • {currentYear}
        </p>
        <p className="footer__subtext">
          Desenvolvido com React + Vite
        </p>
      </div>
    </footer>
  )
}
