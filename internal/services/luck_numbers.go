package services

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"

	"github.com/william-cesar/chat-do-gpt/internal/logger"
)

const LIST_LEN = 60

var LuckNumbers map[int]string = initNumbers()

func initNumbers() map[int]string {
	list := make(map[int]string, LIST_LEN)

	for i := range LIST_LEN {
		list[i+1] = ""
	}

	return list
}

type LuckNumberRequest struct {
	Number int    `json:"number"`
	Id     string `json:"id"`
}

func pickNumber(req LuckNumberRequest) (string, error) {
	var msg string
	if _, ok := LuckNumbers[req.Number]; !ok {
		msg = fmt.Sprintf("Number '%d' selected by user '%s' not found", req.Number, req.Id)
		logger.Log(logger.WARN, msg)
		return "", errors.New(msg)
	}

	if LuckNumbers[req.Number] != "" {
		msg = fmt.Sprintf("Cannot pick number '%d' by user '%s'. Number already picked", req.Number, req.Id)
		logger.Log(logger.WARN, msg)
		return "", errors.New(msg)
	}

	LuckNumbers[req.Number] = req.Id
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
