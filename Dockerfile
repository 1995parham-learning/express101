FROM node:alpine

WORKDIR /usr/express101
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

CMD ["npm", "start"]
