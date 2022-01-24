FROM node:14

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "serve"]