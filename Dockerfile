# Build and start the API
FROM ./api as api
RUN docker build -t chat-api .

# Build and start the client
FROM ./client as client
RUN docker build -t chat-client .

# Start both containers
CMD ["docker", "run", "-p", "8080:8080", "-e", "GEMINI_API_KEY=${GEMINI_API_KEY}", "--name", "chat-api", "chat-api"] && ["docker", "run", "-p", "5173:5173", "-e", "NODE_ENV=production", "--name", "chat-client", "chat-client"]