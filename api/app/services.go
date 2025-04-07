package app

import (
	"log"
	"net/http"
)

func HandleEntryPoints() {

	http.HandleFunc("/login", HandleUsers)
	http.HandleFunc("/ws", HandleConnections)

	go HandleMessages()

	log.Println("Listening on port 8080")

	if err := http.ListenAndServe("0.0.0.0:8080", nil); err != nil {
		log.Fatal("Error to serve: ", err)
	}
}
