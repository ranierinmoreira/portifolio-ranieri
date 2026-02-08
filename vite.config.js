import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Nome do repositório no GitHub - altere se for diferente
const repoName = 'portifolio-ranieri'

export default defineConfig(({ command }) => {
  const isProd = command === 'build'
  return {
    plugins: [react()],
    // Em dev: /. Em build (GitHub Pages): /portifolio-ranieri/
    base: isProd ? `/${repoName}/` : '/',
  }
})
