# ============================================================
# ESTÁGIO 1: "deps" — instala apenas as dependências
# ============================================================
FROM node:20-alpine AS deps

# alpine = versão bem leve do Linux (economiza espaço)
WORKDIR /app

# Copia só os arquivos de dependências primeiro
# (truque: se não mudar o package.json, o Docker reutiliza o cache)
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./

# Instala dependências de acordo com o gerenciador que você usa
RUN \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install --frozen-lockfile; \
  else echo "Nenhum lockfile encontrado." && exit 1; \
  fi


# ============================================================
# ESTÁGIO 2: "builder" — faz o build do Next.js
# ============================================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copia as dependências instaladas no estágio anterior
COPY --from=deps /app/node_modules ./node_modules

# Copia o restante do projeto
COPY . .

# Variável necessária para o Next.js gerar output otimizado
ENV NEXT_TELEMETRY_DISABLED=1

# Roda o build de produção
RUN npm run build


# ============================================================
# ESTÁGIO 3: "runner" — imagem final, só o necessário pra rodar
# ============================================================
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Cria um usuário sem privilégios de root (boa prática de segurança)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copia arquivos públicos
COPY --from=builder /app/public ./public

# Copia o output do build com as permissões corretas
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Usa o usuário sem root
USER nextjs

# Porta que o Next.js vai escutar
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Comando para iniciar o servidor
CMD ["node", "server.js"]