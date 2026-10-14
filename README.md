# Portfolio v4

Portfolio pessoal de Isaías Altoé.

## Sobre

Site estático de portfolio, sem backend. O projeto também serve para aprender React,
então a arquitetura é simples: usa bem os recursos do React (componentes, props,
estado, hooks) sem over engineering.

## Stack

- **React** + **TypeScript**
- **Vite** (dev server e build estático)
- **Tailwind CSS** (estilização)

Sem roteador: o site é uma página única com navegação por âncoras entre as seções.

## Seções

Mesma estrutura da versão anterior (branch `master`), em uma única página:

1. **Início** — apresentação (hero)
2. **Projetos** — cards com os projetos
3. **Experiências** — carreira profissional
4. **Sobre mim** — quem sou, tecnologias
5. **Contato** — links e formas de contato

O site é bilíngue (português e inglês), com o seletor "PT / EN" na navbar.
Textos da interface ficam em `src/i18n/translations.ts`; textos dos dados
(projetos, experiências) usam o tipo `Localized` com `{ pt, en }`.

## Estrutura de pastas

```
src/
  components/   # componentes reutilizáveis (Navbar, ProjectCard, ...)
  sections/     # uma seção por arquivo (Hero, Projects, Experiences, About, Contact)
  data/         # conteúdo em arquivos .ts (projetos, experiências, links)
  hooks/        # hooks próprios (usePhraseCycle, useRevealOnScroll)
  i18n/         # traduções e contexto de idioma
  assets/       # imagens e ícones importados pelo código
  App.tsx       # monta a página com as seções
  main.tsx      # ponto de entrada
public/         # arquivos servidos como estão (favicon, currículo PDF)
```

Princípio: **conteúdo separado da apresentação**. Projetos e experiências ficam
em `src/data/` como arrays tipados, e os componentes só fazem `.map()` sobre eles.
Adicionar um projeto novo = editar um arquivo de dados, sem mexer em JSX.

## Design

Estética **lápis + sketchbook**: papel claro, traço de grafite tremido e
anotações em caneta vermelha na margem.

- **Cores e fontes:** tokens em `src/index.css` (`@theme`). Patrick Hand no texto,
  Architects Daughter nos títulos, Caveat nas anotações.
- **Traço tremido:** filtro SVG `#pencil` (`src/components/PencilFilter.tsx`),
  usado pelas classes `sketch-border`, `pen-circle` e `pen-circle-hover`.
- **Outros recursos:** `scratch` (palavra riscada), `hatch` (hachura de rascunho),
  `pencil-photo` (foto em tons de cinza), `<MarginNote>` e `<Scribble>`.

## Deploy

Mesmo fluxo da versão anterior:

1. Push na branch `master` dispara o GitHub Action `.github/workflows/deploy.yml`
2. O Action entra na VPS via SSH (secrets `VPS_HOST`, `VPS_USERNAME`, `VPS_SSH_KEY`),
   vai em `/home/ubuntu/portfolio`, faz `git pull` e roda `docker compose up -d --build`
3. O `Dockerfile` tem dois estágios:
   - **build:** `node:20-alpine` roda `npm install` e `npm run build` (gera `dist/`)
   - **serve:** `nginx:alpine` serve o conteúdo de `dist/`
4. O `docker-compose.yml` expõe o container na porta `3000` da VPS (`3000:80`)

## Rodando localmente

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção em dist/
npm run preview  # testa o build localmente
```
