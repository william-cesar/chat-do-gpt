package app

import (
	"log"
	"net/http"
	"sync"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

var clients = make(map[*websocket.Conn]string)
var messages []WsMessage
var mu sync.Mutex

func HandleConnections(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)

	if err != nil {
		log.Println("Error upgrading connection: ", err)
		return
	}

	defer conn.Close()

	mu.Lock()
	clients[conn] = ""
	mu.Unlock()

	mu.Lock()
	for _, msg := range messages {
		err := conn.WriteJSON(msg)

		if err != nil {
			log.Println("Error writing message on connection: ", err)
			break
		}
	}
	mu.Unlock()

	for {
		var msg WsMessage

		err := conn.ReadJSON(&msg)

		if err != nil {
			log.Println("Error message on connection: ", err)
			mu.Lock()
			delete(clients, conn)
			mu.Unlock()
			break
		}

		mu.Lock()
		if msg.Id != "gemini" {
			clients[conn] = msg.Id
		}
		messages = append(messages, msg)
		mu.Unlock()

		msg.ConnectedUsers = connectedUsers
		msg.NumbersList = luckNumbers

		broadcast <- msg
	}

}
