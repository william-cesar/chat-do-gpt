package logger

import "log"

const (
	INFO  = "[INFO] - "
	WARN  = "[WARN] - "
	ERROR = "[ERROR] - "
	FATAL = "[FATAL] - "
)

func Log(prefix, msg string) {
	log.SetPrefix(prefix)

	if prefix == FATAL {
		log.Fatal(msg)
	} else {
		log.Println(msg)
	}
}
