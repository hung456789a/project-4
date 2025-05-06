FROM node:18
WORKDIR /app
COPY index.js /app
COPY package.json /app
RUN npm init -y
CMD ["node", "/app/index.js"]
