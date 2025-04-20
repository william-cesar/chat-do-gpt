FROM golang:1.24.0 AS build

WORKDIR /api

COPY go.* .

RUN go mod download

COPY . .

RUN go build -o main main.go

FROM golang:1.24.0 AS run

WORKDIR /api

COPY --from=build /api/main .

EXPOSE 8080

CMD ["./main"]
