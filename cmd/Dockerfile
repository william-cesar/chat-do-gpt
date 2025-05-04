FROM node:20-alpine AS web-build

WORKDIR /web

COPY web/package*.json ./

RUN npm ci

COPY web ./

ARG VITE_BASE_URL
ARG VITE_WS_URL

ENV VITE_BASE_URL=${VITE_BASE_URL} \
    VITE_WS_URL=${VITE_WS_URL} 

RUN npm run build


FROM golang:1.24-alpine

WORKDIR /app

COPY go.* ./

RUN go mod download

COPY . .
RUN rm -rf web cmd .git .gitignore
COPY --from=web-build /web/dist ./web/dist

ARG ALLOWED_ORIGIN
ARG BASE_URL
ARG GEMINI_API_KEY

ENV ALLOWED_ORIGIN=${ALLOWED_ORIGIN} \
    BASE_URL=${BASE_URL} \
    GEMINI_API_KEY=${GEMINI_API_KEY}

RUN go build -o chat-do-gpt main.go

EXPOSE 8080

CMD ["./chat-do-gpt"]