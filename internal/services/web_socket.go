package services

import (
	"fmt"
	"net/http"
	"sync"

	"github.com/gorilla/websocket"
	"github.com/william-cesar/chat-do-gpt/internal/logger"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

type clientConn struct {
	id    string
	uname string
}

type WsMessage struct {
	Id             string                    `json:"id"`
	Username       string                    `json:"username"`
	Message        string                    `json:"message"`
	ConnectedUsers []UserResponse            `json:"connectedUsers"`
	LuckNumber     int                       `json:"pickNumber,omitempty"`
	NumbersList    map[int]LuckNumberRequest `json:"numbersList"`
	Status         string                    `json:"status,omitempty"`
}

var clients = make(map[*websocket.Conn]clientConn)
var messages []WsMessage
var broadcast = make(chan WsMessage)
var mu sync.Mutex

func HandleConnections(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)

	if err != nil {
		logger.Log(logger.WARN, fmt.Sprintf("Failed to upgrade connection: %s", err))
		return
	}

	defer conn.Close()

	mu.Lock()
	clients[conn] = clientConn{}
	mu.Unlock()

	mu.Lock()
	for _, msg := range messages {
		err := conn.WriteJSON(msg)

		if err != nil {
			logger.Log(logger.WARN, fmt.Sprintf("Failed to read message from %s", msg.Username))
			break
		}
	}
	mu.Unlock()

	for {
		var msg WsMessage
		err := conn.ReadJSON(&msg)

		if err != nil {
			mu.Lock()
			handleMessageError(msg.Username, msg.Id, conn)
			mu.Unlock()
			break
		}

		mu.Lock()
		messages = append(messages, msg)
		mu.Unlock()

		msg.ConnectedUsers = connectedUsers
		msg.NumbersList = LuckNumbers

		broadcast <- msg
	}
}

func handleMessageError(name, id string, conn *websocket.Conn) {
	logger.Log(logger.WARN, fmt.Sprintf("Failed to write message from %s", name))
	conn.Close()
	removeConnectedUser(id)
	delete(clients, conn)
}

func Handlemessages() {
	for {
		msg := <-broadcast
		mu.Lock()

		for client, val := range clients {
			err := client.WriteJSON(msg)

			if err != nil {
				errMsg := fmt.Sprintf("Failed to write message from %s", val.uname)
				logger.Log(logger.WARN, errMsg)

				client.Close()
				delete(clients, client)
				removeConnectedUser(val.id)
			}
		}

		mu.Unlock()
	}
}
