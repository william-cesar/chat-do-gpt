package api

import (
	"fmt"
	"net/http"
	"os"
	"path"
	"path/filepath"

	"github.com/william-cesar/chat-do-gpt/internal/logger"
	svc "github.com/william-cesar/chat-do-gpt/internal/services"
)

const V1_PREFIX = "/api/v1"
const DEV_BASE_URL = "0.0.0.0:8080"

func HandleRequests() {
	jm := jsonMiddleware
	cm := corsMiddleware

	http.Handle("/", serveSPA("web", "index.html"))

	http.HandleFunc(path.Join(V1_PREFIX, "/login"), useMiddlewares(svc.HandleUsers, jm, cm))
	http.HandleFunc(path.Join(V1_PREFIX, "/pick-number"), useMiddlewares(svc.HandleLuckNumber, jm, cm))
	http.HandleFunc(path.Join(V1_PREFIX, "/ws"), useMiddlewares(svc.HandleConnections, cm))
	http.HandleFunc(path.Join(V1_PREFIX, "/draw"), useMiddlewares(svc.Handledraw, jm, cm))
	http.HandleFunc(path.Join(V1_PREFIX, "/ai"), useMiddlewares(svc.HandleAiMessages, jm, cm))

	go svc.Handlemessages()

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

func serveSPA(staticPath, indexPath string) http.Handler {
	fs := http.FileServer(http.Dir(staticPath))
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		path := filepath.Join(staticPath, r.URL.Path)
		_, err := os.Stat(path)
		if os.IsNotExist(err) {
			http.ServeFile(w, r, filepath.Join(staticPath, indexPath))
			return
		} else if err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}

		fs.ServeHTTP(w, r)
	})
}
