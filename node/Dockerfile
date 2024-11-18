FROM node:lts-jod

WORKDIR /usr/src/app

COPY package*.json ./

RUN nom install express -y
RUN npm install

COPY . .