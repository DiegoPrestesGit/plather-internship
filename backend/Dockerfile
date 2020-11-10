FROM node:12.14.0-alpine3.11

WORKDIR /app

COPY ./package*.json /app

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]
