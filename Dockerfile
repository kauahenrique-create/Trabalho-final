# Usa uma imagem leve do Nginx para servir arquivos estáticos
FROM nginx:alpine

# Copia os arquivos do projeto para a pasta padrão do Nginx
COPY . /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Inicia o Nginx automaticamente
CMD ["nginx", "-g", "daemon off;"]