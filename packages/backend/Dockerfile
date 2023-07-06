FROM node:18.14-alpine

WORKDIR /app

COPY ./package.json ./

RUN npm install --production

COPY ./dist ./

CMD ["node", "server.js"]
