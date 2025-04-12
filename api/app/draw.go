package app

import (
	"encoding/json"
	"net/http"
)

type LuckNumberRequest struct {
	Id         string `json:"id"`
	LuckNumber int    `json:"luckNumber"`
}

type LuckNumberResponse struct {
	NumbersList map[int]string `json:"numbersList"`
	LuckNumber  int            `json:"luckNumber"`
}

const TOTAL_LUCK_NUMBERS = 60

var luckNumbers = make(map[int]string)

func InitNumbers() {
	if len(luckNumbers) == 0 {
		for idx := range TOTAL_LUCK_NUMBERS {
			luckNumbers[idx+1] = "free"
		}
	}
}

func PickNumber(req LuckNumberRequest) {
	if _, ok := luckNumbers[req.LuckNumber]; ok {
		luckNumbers[req.LuckNumber] = req.Id
	}
}

func HandlePickNumber(w http.ResponseWriter, r *http.Request) {
	var newReqUser LuckNumberRequest

	err := json.NewDecoder(r.Body).Decode(&newReqUser)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	PickNumber(newReqUser)

	if err := json.NewEncoder(w).Encode(newReqUser); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
}
