FROM node:18
WORKDIR /app
COPY . /app
RUN npm init -y
EXPOSE 3000
ENTRYPOINT ["node","/app/index.js"]