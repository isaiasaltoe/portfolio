# ESTÁGIO 1: Build
# Usa uma imagem do Node.js pra instalar dependências e buildar
# (Vite 8 precisa de Node 20.19+ ou 22.12+)
FROM node:22-alpine AS builder

WORKDIR /app

# Copia só os arquivos de dependência primeiro (otimização de cache)
COPY package*.json ./
RUN npm install

# Copia o restante do código e builda
COPY . .
RUN npm run build

# ESTÁGIO 2: Servir
# Usa uma imagem leve do Nginx pra servir os arquivos estáticos
FROM nginx:alpine

# Copia os arquivos buildados (pasta dist/ do Vite) pro Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
