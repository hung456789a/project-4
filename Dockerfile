FROM node:18
WORKDIR /app
COPY index.js /app
RUN npm init -y
EXPOSE 3000
CMD ["node","index.js"]