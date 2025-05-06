FROM node:18
COPY index.js /app
WORKDIR /app
RUN npm init -y
CMD ["node","index.js"]