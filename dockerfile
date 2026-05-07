# ESTÁGIO 1: Build
# Usa uma imagem do Node.js pra instalar dependências e buildar
FROM node:20-alpine AS builder

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

# Copia os arquivos buildados (pasta out/) pro Nginx
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]