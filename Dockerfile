FROM node:18
WORKDIR /app
COPY package.json ./
RUN npm init -y
COPY index.js ./
EXPOSE 3000
CMD ["node", "index.js"]
