FROM node:latest

WORKDIR /usr/src/app

COPY /backend/package.json ./

RUN npm install

COPY . .

EXPOSE 4000
CMD [ "node", "backend/app.js" ]
    
