# Utilizați o imagine de bază Node.js
FROM node:14

# Setați directorul de lucru în container
WORKDIR /app

# Copiați fișierele de dependență și codul sursă în directorul de lucru
COPY package*.json ./
RUN npm install
COPY . .

# Expose portul pe care rulează aplicația (asigurați-vă că este același ca în angular.json)
EXPOSE 8080

# Comanda pentru a porni aplicația Angular (asigurați-vă că ascultă pe portul 8080)
CMD ["ng", "serve", "--port", "8080", "--host", "0.0.0.0"]

#new
