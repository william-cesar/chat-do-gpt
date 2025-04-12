package app

import (
	"log"
)

type WsMessage struct {
	Id             string         `json:"id"`
	Username       string         `json:"username"`
	Message        string         `json:"message"`
	ConnectedUsers []ResponseUser `json:"connectedUsers"`
	LuckNumber     int            `json:"pickNumber"`
	NumbersList    map[int]string `json:"numbersList"`
}

var broadcast = make(chan WsMessage)

func HandleMessages() {
	for {
		msg := <-broadcast

		mu.Lock()
		for client := range clients {
			err := client.WriteJSON(msg)

			if err != nil {
				log.Println("Error writing message to stream: ", err)
				client.Close()
				delete(clients, client)
			}
		}
		mu.Unlock()
	}
}
