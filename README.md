# Portfólio Ranieri

Portfólio pessoal desenvolvido com React + Vite, pronto para publicação no GitHub Pages.

## 🚀 Como rodar localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173)

## 📦 Publicar no GitHub Pages

### 1. Configurar o repositório

1. Crie um repositório no GitHub (ex: `portifolio-ranieri`)
2. Envie o código:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/portifolio-ranieri.git
git push -u origin main
```

### 2. Ajustar o base path

Se o nome do seu repositório for diferente de `portifolio-ranieri`, edite o arquivo `vite.config.js`:

```js
const repoName = 'nome-do-seu-repositorio'
```

### 3. Fazer o deploy

```bash
npm run deploy
```

O comando `deploy` vai:
1. Fazer o build do projeto (`npm run build`)
2. Publicar a pasta `dist` na branch `gh-pages`

### 4. Ativar o GitHub Pages

1. Acesse o repositório no GitHub
2. Vá em **Settings** → **Pages**
3. Em **Source**, selecione **Deploy from a branch**
4. Em **Branch**, escolha `gh-pages` e pasta `/ (root)`
5. Clique em **Save**

Seu portfólio estará em: **https://seu-usuario.github.io/portifolio-ranieri/**

## ✏️ Como editar o portfólio

**Tudo é editado em um único arquivo:** `src/data/portfolio.js`

Lá você altera nome, cargo, descrição, e-mail, redes sociais, textos da seção Sobre, habilidades, ferramentas e projetos. Não precisa mexer nos componentes.

Veja o guia completo: **[COMO-EDITAR.md](COMO-EDITAR.md)**

## Tecnologias

- React 18
- Vite 5
- gh-pages (deploy)
# portifolio-ranieri
