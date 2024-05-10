FROM node:current-alpine3.18

RUN mkdir -p /home/node/app/node_modules
WORKDIR /home/node/app

COPY package*.json ./
RUN chown -R node:node /home/node/app

USER node

RUN npm install

COPY --chown=node:node . .

RUN npm run build

EXPOSE 3000
ENV PORT=3000
CMD [ "node", "build" ]
