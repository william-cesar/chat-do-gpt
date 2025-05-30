package services

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strings"

	"slices"

	"github.com/google/uuid"
	"github.com/william-cesar/chat-do-gpt/logger"
)

type UserRequest struct {
	Username string `json:"username"`
}

type UserInfo struct {
	Role      string `json:"role"`
	Color     string `json:"color"`
	ShortName string `json:"short"`
}

type UserResponse struct {
	Id       string   `json:"id"`
	Username string   `json:"username"`
	Info     UserInfo `json:"info"`
}

type ResponseMessage struct {
	Message string `json:"message"`
}

var connectedUsers []UserResponse = []UserResponse{
	{
		Id:       "gemini",
		Username: "Gemini",
		Info: UserInfo{
			Role:      "admin",
			Color:     "#FF8C00",
			ShortName: "🤖",
		},
	},
}

func generateUserColor(nm string) string {
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

	count := 0

	for _, char := range nm {
		count += int(char)
	}

	return COLORS[count%len(COLORS)]
}

func newUser(uname string) UserResponse {
	return UserResponse{
		Id:       uuid.New().String(),
		Username: uname,
		Info: UserInfo{
			Role:      "guest",
			Color:     generateUserColor(uname),
			ShortName: strings.ToUpper(uname[:2]),
		},
	}
}

func addConnectedUser(user UserResponse) {
	connectedUsers = append(connectedUsers, user)
}

func removeConnectedUser(id string) {
	for i, user := range connectedUsers {
		if user.Id == id {
			connectedUsers = slices.Delete(connectedUsers, i, i+1)
			break
		}
	}
}

func HandleUsers(w http.ResponseWriter, r *http.Request) {
	var reqUser UserRequest

	err := json.NewDecoder(r.Body).Decode(&reqUser)

	if err != nil || reqUser.Username == "" {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(ResponseMessage{Message: "Invalid content"})
		return
	}

	const MIN_UNAME_LEN = 3

	if len(reqUser.Username) < MIN_UNAME_LEN {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(ResponseMessage{Message: "Username must be at least 3 characters long"})
		return
	}

	newUser := newUser(reqUser.Username)
	w.WriteHeader(http.StatusCreated)

	if err := json.NewEncoder(w).Encode(newUser); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(ResponseMessage{Message: "Failed to create user"})
		return
	}

	msg := fmt.Sprintf("New user created: %s", newUser.Username)
	logger.Log(logger.INFO, msg)
	addConnectedUser(newUser)
}
