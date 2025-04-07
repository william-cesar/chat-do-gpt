package app

import (
	"encoding/json"
	"net/http"
	"strings"

	"github.com/google/uuid"
)

type RequestUser struct {
	Username string `json:"username"`
}

type ResponseUser struct {
	Id       string   `json:"id"`
	Username string   `json:"username"`
	Info     UserInfo `json:"info"`
}

type UserInfo struct {
	Role  string `json:"role"`
	Color string `json:"color"`
	Short string `json:"short"`
	Badge string `json:"badge"`
}

func newUser(username string) ResponseUser {
	return ResponseUser{
		Id:       uuid.New().String(),
		Username: username,
		Info: UserInfo{
			Role:  "guest",
			Color: getColor(username),
			Short: strings.ToUpper(username[:2]),
			Badge: "info",
		},
	}
}

var COLORS = []string{
	"#FF8C00",
	"#7FFF00",
	"#8B0A1A",
	"#00BFFF",
	"#FFD700",
	"#DC143C",
	"#32CD32",
	"#F5DEB3",
	"#FF0000",
	"#6495ED",
}

func getColor(username string) string {
	var count int

	for _, char := range username {
		count += int(char)
	}
	return COLORS[count%len(COLORS)]
}

var connectedUsers = []ResponseUser{
	{
		Id:       "gemini",
		Username: "Gemini",
		Info: UserInfo{
			Role:  "admin",
			Color: COLORS[0],
			Short: "🤖",
			Badge: "success",
		},
	},
}

func HandleUsers(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	var newReqUser RequestUser

	err := json.NewDecoder(r.Body).Decode(&newReqUser)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	if len(newReqUser.Username) < 3 {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	newUser := newUser(newReqUser.Username)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)

	if err := json.NewEncoder(w).Encode(newUser); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	connectedUsers = append(connectedUsers, newUser)
}
