FROM golang:1.24.0 AS api-build
WORKDIR /app/api
COPY api/go.* .
RUN go mod download
COPY api/ .
RUN go build -o main main.go

FROM node:20 AS client-build
WORKDIR /app/client
COPY client/package.json client/yarn.lock ./
RUN yarn install
COPY client/ .
RUN yarn run build


FROM golang:1.24.0
WORKDIR /app

COPY --from=api-build /app/api/main /app/api

COPY --from=client-build /app/client/dist /app/client

RUN apt-get update && apt-get install -y nodejs npm
RUN npm install -g serve

EXPOSE 8080 5173

CMD sh -c "(/app/api & serve -s /app/client -l 5173)"