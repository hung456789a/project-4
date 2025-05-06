FROM node:18
WORKDIR /app
COPY index.js /app
RUN npm init -y
CMD ["node", "/app/index.js"]
