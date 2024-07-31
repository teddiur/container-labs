FROM node:14-alpine

COPY package.json package-lock.json .
RUN npm install

COPY . .
EXPOSE 8080
CMD ["npm", "start"]