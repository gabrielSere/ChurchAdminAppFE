# Utilizați o imagine de bază Node.js
FROM node:14

# Setați directorul de lucru în container
WORKDIR /app

# Copiați fișierele de dependență și codul sursă în directorul de lucru
COPY package*.json ./
RUN npm install
COPY . .

# Expose portul pe care rulează aplicația
EXPOSE 4200

# Comanda pentru a porni aplicația Angular
CMD ["npm", "start"]
