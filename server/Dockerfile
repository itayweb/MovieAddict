FROM node:20-slim

WORKDIR /backend

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 8081

CMD [ "npm", "run", "dev" ]