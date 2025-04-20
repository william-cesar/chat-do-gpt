package app

import (
	"log"
	"net/http"
	"os"
	"path/filepath"

	"github.com/joho/godotenv"
)

func HandleEntryPoints() {
	http.Handle("/", spaHandler("static", "index.html"))

	http.HandleFunc("/login", corsMiddleware(HandleUsers))
	http.HandleFunc("/ws", HandleConnections)
	http.HandleFunc("/pick-number", corsMiddleware(HandlePickNumber))
	http.HandleFunc("/draw", corsMiddleware(HandleDraw))
	http.HandleFunc("/ai", corsMiddleware(HandleAiMessages))

	go HandleMessages()
	InitNumbers()

	log.Println("App started")

	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file: ", err)
	}

	baseUrl := os.Getenv("BASE_URL")

	if baseUrl == "" {
		log.Fatal("BASE_URL not found")
	}

	if err := http.ListenAndServe(baseUrl, nil); err != nil {
		log.Fatal("Error to serve: ", err)
	}
}

func corsMiddleware(next http.HandlerFunc) http.HandlerFunc {
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file: ", err)
	}

	allowedOrigins := os.Getenv("ALLOWED_ORIGINS")

	if allowedOrigins == "" {
		log.Fatal("ALLOWED_ORIGINS not found")
	}

	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", allowedOrigins)
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}
		next(w, r)
	}
}

func spaHandler(staticPath, indexPath string) http.Handler {
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
