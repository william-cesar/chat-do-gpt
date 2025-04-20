package app

import (
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

func HandleEntryPoints() {

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
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}
		next(w, r)
	}
}
