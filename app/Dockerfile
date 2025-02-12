# Etapa 1: Construcción de la aplicación Angular
FROM node:18 

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración de Angular
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente al contenedor
COPY . .

# Compila la aplicación Angular en modo producción
RUN npm run build --prod

# Etapa 2: Servir la aplicación con Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el código fuente y la carpeta compilada

COPY package*.json ./

# Instala solo dependencias necesarias para producción
RUN npm install 

# Copia un servidor básico en Node.js (ver más abajo el código)
COPY index.js .

# Expone el puerto 3000 para el tráfico web
EXPOSE 3000

# Ejecuta la aplicación con Node.js
CMD ["node", "index.js"]

