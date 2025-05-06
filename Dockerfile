FROM node:18
COPY index.js /app
WORKDIR /app
RUN npm init -y
EXPOSE 3000
CMD ["node","index.js"]