FROM node:18.12.1-alpine

WORKDIR /app

EXPOSE 5173

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

RUN chown -R node:node /app/node_modules
RUN chmod -R 777  /app/node_modules

CMD ["npm","run","dev"]