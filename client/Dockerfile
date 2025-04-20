FROM node:20 AS build

WORKDIR /client

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn run build

FROM node:20 AS run

WORKDIR /client

COPY --from=build /client /client

RUN yarn global add serve

EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]

