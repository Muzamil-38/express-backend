FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma

RUN npx prisma generate

COPY . .

ENV PATH /app/node_modules/.bin:$PATH

CMD [ "npx", "nodemon", "src/index.ts" ]