FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .
RUN npm ci --omit=dev

ENV DEBUG=puhelinluettelo-backend:* PORT=3000 MONGODB_URI=placeholder

USER node
CMD npm run start:prod