// ============================================
// Dados do seu portfólio – edite aqui
// ============================================

export const profile = {
  name: 'Ranieri',
  role: 'Desenvolvedor Full Stack',
  tagline: 'Disponível para projetos e novas oportunidades', // frase curta na apresentação (opcional)
  description: 'Crio experiências digitais únicas com foco em código limpo, design moderno e performance. Pronto para transformar ideias em realidade.',
  email: 'seu-email@exemplo.com',
  resumeUrl: '/curriculo.pdf', // coloque o PDF na pasta public/
  social: {
    github: 'https://github.com/ranierinmoreira',
    linkedin: 'https://linkedin.com/in/ranierinmoreira',
    twitter: '', // opcional, deixe '' para não exibir
  },
}

export const about = {
  paragraphs: [
    'Sou um desenvolvedor apaixonado por tecnologia e por criar soluções que fazem a diferença. Com experiência em desenvolvimento web, busco sempre aprender novas ferramentas e metodologias para entregar projetos de qualidade.',
    'Meu foco está em construir interfaces intuitivas, APIs robustas e aplicações escaláveis. Acredito que o bom código é aquele que qualquer pessoa consegue entender e manter.',
    'Quando não estou codando, gosto de estudar novas tecnologias, contribuir para projetos open source e compartilhar conhecimento com a comunidade.',
  ],
}

export const skills = [
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'HTML & CSS', level: 90 },
  { name: 'Git', level: 85 },
  { name: 'TypeScript', level: 70 },
]

export const tools = ['VS Code', 'Figma', 'Linux', 'PostgreSQL', 'MongoDB', 'Docker']

export const projects = [
  {
    title: 'Portfólio',
    description: 'Este site pessoal feito com React e Vite, publicado no GitHub Pages.',
    tags: ['React', 'Vite', 'GitHub Pages'],
    link: 'https://github.com/ranierinmoreira/portifolio-ranieri',
    image: null,
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do seu projeto. Tecnologias e o que ele faz.',
    tags: ['React', 'Node.js'],
    link: 'https://github.com/ranierinmoreira',
    image: null,
  },
  {
    title: 'Projeto 3',
    description: 'Outro projeto. Edite em src/data/portfolio.js.',
    tags: ['TypeScript', 'Next.js'],
    link: 'https://github.com/ranierinmoreira',
    image: null,
  },
]
