FROM node:16

WORKDIR /usr/src/todo-backend-dev

COPY --chown=node:node . .
RUN npm install

ENV DEBUG=todo-backend-dev:*

USER node
CMD ["npm", "run", "dev"]