FROM node:18
WORKDIR /app
COPY package.json ./app
RUN npm init -y
COPY index.js ./app
EXPOSE 3000
CMD ["node", "/app/index.js"]
