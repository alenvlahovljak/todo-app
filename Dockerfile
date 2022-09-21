FROM node:16-buster-slim
WORKDIR /usr/app

COPY ./ ./

RUN yarn install
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
