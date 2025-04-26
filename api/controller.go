package api

import (
	"fmt"
	"net/http"
	"os"
	"path"

	"github.com/william-cesar/chat-do-gpt/internal/logger"
	"github.com/william-cesar/chat-do-gpt/internal/services"
)

const V1_PREFIX = "/api/v1"
const DEV_BASE_URL = "0.0.0.0:8080"

func HandleRequests() {
	http.HandleFunc(path.Join(V1_PREFIX, "/login"), corsMiddleware(services.HandleUsers))

	baseUrl := os.Getenv("BASE_URL")

	if baseUrl == "" {
		msg := fmt.Sprintf("BASE_URL not set. Setting it to development value: '%s'", DEV_BASE_URL)
		logger.Log(logger.WARN, msg)
		baseUrl = DEV_BASE_URL
	}

	msg := fmt.Sprintf("Chat do gpt is running at: %s", baseUrl)
	logger.Log(logger.INFO, msg)

	if err := http.ListenAndServe(baseUrl, nil); err != nil {
		msg := fmt.Sprintf("Error to serve app: %s", err)
		logger.Log(logger.FATAL, msg)
	}
}
