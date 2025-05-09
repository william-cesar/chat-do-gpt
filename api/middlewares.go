package api

import (
	"net/http"
)

const DEV_ALLOWED_ORIGIN = "*"

func corsMiddleware(next http.HandlerFunc) http.HandlerFunc {
	allowedOrigin := DEV_ALLOWED_ORIGIN

	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", allowedOrigin)
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next(w, r)
	}
}

func jsonMiddleware(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		next(w, r)
	}
}

func useMiddlewares(fun http.HandlerFunc, middlewares ...func(http.HandlerFunc) http.HandlerFunc) http.HandlerFunc {
	for _, middleware := range middlewares {
		fun = middleware(fun)
	}
	return fun
}
