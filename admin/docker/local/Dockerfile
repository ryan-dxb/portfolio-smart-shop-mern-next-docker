ARG NODE_VERSION=18-alpine3.17

FROM node:${NODE_VERSION} AS base


ARG APP_DIR=/app

WORKDIR ${APP_DIR}

COPY package*.json ./

RUN npm install

COPY . ${APP_HOME}

CMD ["npm","run","dev"]