FROM node:10

WORKDIR /app
COPY . /app
RUN yarn
ENV NODE_TLS_REJECT_UNAUTHORIZED='0'

ENTRYPOINT [ "node", "/app/main.js" ]