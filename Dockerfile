FROM node:18
WORKDIR /app
COPY package.json ./app
RUN npm init -y
COPY index.js ./app
CMD ["node", "/app/index.js"]
