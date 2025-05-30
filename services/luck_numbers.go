package services

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"

	"github.com/william-cesar/chat-do-gpt/logger"
)

const LIST_LEN = 60

var LuckNumbers map[int]LuckNumberRequest = initNumbers()

func initNumbers() map[int]LuckNumberRequest {
	list := make(map[int]LuckNumberRequest, LIST_LEN)

	for i := range LIST_LEN {
		list[i+1] = LuckNumberRequest{}
	}

	return list
}

type LuckNumberRequest struct {
	Number   int    `json:"number"`
	Id       string `json:"id"`
	Username string `json:"username"`
}

type DrawResponse struct {
	Result string            `json:"result"`
	Data   LuckNumberRequest `json:"data"`
}

type DrawRequest struct {
	Number int `json:"number"`
}

func pickNumber(req LuckNumberRequest) (string, error) {
	var msg string
	if _, ok := LuckNumbers[req.Number]; !ok {
		msg = fmt.Sprintf("Number '%d' selected by user '%s' not found", req.Number, req.Id)
		logger.Log(logger.WARN, msg)
		return "", errors.New(msg)
	}

	if LuckNumbers[req.Number].Id != "" {
		msg = fmt.Sprintf("Cannot pick number '%d' by user '%s'. Number already picked", req.Number, req.Id)
		logger.Log(logger.WARN, msg)
		return "", errors.New(msg)
	}

	LuckNumbers[req.Number] = LuckNumberRequest{
		Number:   req.Number,
		Id:       req.Id,
		Username: req.Username,
	}
	msg = fmt.Sprintf("Number '%d' successfully selected by user '%s'", req.Number, req.Id)
	logger.Log(logger.INFO, msg)
	return msg, nil
}

func HandleLuckNumber(w http.ResponseWriter, r *http.Request) {
	var req LuckNumberRequest

	err := json.NewDecoder(r.Body).Decode(&req)

	if err != nil || req.Id == "" {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(ResponseMessage{Message: "Invalid content"})
		return
	}

	msg, err := pickNumber(req)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(ResponseMessage{Message: err.Error()})
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(ResponseMessage{Message: msg})
}

func drawLuckNumber(luckNumber int) LuckNumberRequest {
	return LuckNumbers[luckNumber]
}

func sendMessages(winner LuckNumberRequest) {
	for conn, client := range clients {
		if client.id == winner.Id {
			msg := DrawResponse{
				Result: "winner",
				Data:   winner,
			}

			if err := conn.WriteJSON(msg); err != nil {
				handleMessageError(winner.Username, winner.Id, conn)
			}
		} else {
			msg := DrawResponse{
				Result: "game-over",
			}

			if err := conn.WriteJSON(msg); err != nil {
				handleMessageError(client.uname, client.id, conn)
			}
		}

	}
}

func handledraw(luckNumber int) {
	winner := drawLuckNumber(luckNumber)
	sendMessages(winner)
}
