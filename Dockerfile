FROM ubuntu:24.04

RUN apt-get update && \
    apt-get install -y curl git build-essential make

RUN curl -LO https://go.dev/dl/go1.24.2.linux-amd64.tar.gz && \
    tar -C /usr/local -xzf go1.24.2.linux-amd64.tar.gz && \
    rm go1.24.2.linux-amd64.tar.gz
ENV PATH="/usr/local/go/bin:${PATH}"

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g yarn

WORKDIR /app

COPY . .

WORKDIR /app/api/cmd

RUN make build

EXPOSE 1000

CMD ["../chat-do-gpt"]