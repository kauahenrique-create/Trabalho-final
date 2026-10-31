# Usa uma imagem oficial leve do Node.js
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os ficheiros de dependências
COPY package*.json ./

# Instala apenas as dependências de produção (ou todas se necessário para build)
RUN npm install

# Copia o restante do código da aplicação
COPY . .

# Expõe a porta que a aplicação vai utilizar (ex: 80 ou 3000)
EXPOSE 80

# Comando para iniciar a aplicação
CMD ["npm", "start"]