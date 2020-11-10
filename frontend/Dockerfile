FROM node:12.14.0-alpine3.11 as client

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package*.json /app/

RUN npm install --silent

RUN npm install react-scripts -g --silent

COPY . .

RUN yarn build

FROM nginx:latest

EXPOSE 3000

COPY --from=client /app/build/ /var/www/html

COPY ./nginx/default.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]
