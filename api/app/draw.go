package app

import (
	"encoding/json"
	"log"
	"math/rand"
	"net/http"
	"time"
)

type LuckNumberRequest struct {
	Id         string `json:"id"`
	LuckNumber int    `json:"luckNumber"`
}

type LuckNumberResponse struct {
	NumbersList map[int]string `json:"numbersList"`
	LuckNumber  int            `json:"luckNumber"`
}

type DrawResponse struct {
	LuckNumber int    `json:"luckNumber"`
	WinnerId   string `json:"winnerId"`
	Username   string `json:"username"`
}

type DrawMessageResponse struct {
	Result   string `json:"result"`
	UserId   string `json:"userId"`
	Username string `json:"username,omitempty"`
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

func Draw() int {
	seed := rand.New(rand.NewSource(time.Now().UnixNano()))

	selectedNumbers := make([]int, 0)

	for num, slot := range luckNumbers {
		if slot != "free" {
			selectedNumbers = append(selectedNumbers, num)
		}
	}

	if len(selectedNumbers) == 0 {
		return 0
	}

	return selectedNumbers[seed.Intn(len(selectedNumbers))]
}

func findUserById(id string) ResponseUser {
	for _, user := range connectedUsers {
		if user.Id == id {
			return user
		}
	}
	return ResponseUser{}
}

func SendMessages(winnerId, winnerUsername string) {
	for conn, id := range clients {
		if id == winnerId {
			msg := DrawMessageResponse{
				Result:   "winner",
				UserId:   id,
				Username: winnerUsername,
			}

			if err := conn.WriteJSON(msg); err != nil {
				log.Println("Error writing message on connection: ", err)
				conn.Close()
				delete(clients, conn)
			}
		} else {
			msg := DrawMessageResponse{
				Result: "game-over",
				UserId: id,
			}

			if err := conn.WriteJSON(msg); err != nil {
				log.Println("Error writing message on connection: ", err)
				conn.Close()
				delete(clients, conn)
			}
		}
	}
}

func HandleDraw(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	winner := Draw()

	if winner == 0 {
		w.WriteHeader(http.StatusNoContent)
		return
	}

	winnerId := luckNumbers[winner]
	winnerUser := findUserById(winnerId)

	SendMessages(winnerId, winnerUser.Username)

	if err := json.NewEncoder(w).Encode(DrawResponse{LuckNumber: winner, WinnerId: winnerId, Username: winnerUser.Username}); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
}
