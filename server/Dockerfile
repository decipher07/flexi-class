FROM node:latest
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE  3000 3000

RUN npm install nodemon -g

CMD [ "nodemon" ]