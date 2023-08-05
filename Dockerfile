# Etapa 1: Construirea aplicației Angular
FROM node:16 AS builder

# Setare director de lucru
WORKDIR /app

# Copiere fișiere de proiect și instalare dependențe
COPY package*.json ./
RUN npm cache clean --force
RUN npm install --legacy-peer-deps
COPY . .

# Compilare aplicație Angular
RUN npm run build

# Etapa 2: Utilizarea serverului Nginx pentru a servi aplicația Angular
FROM nginx:alpine

# Copierea fișierelor construite în imaginea Nginx
COPY --from=builder /app/dist/fuse /usr/share/nginx/html

# Expunere port 80 pentru acces la aplicație în container
EXPOSE 8080

# Comandă pentru pornirea serverului Nginx
CMD ["nginx", "-g", "daemon off;"]
