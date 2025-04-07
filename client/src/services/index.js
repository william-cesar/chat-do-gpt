import { GoogleGenAI } from '@google/genai'

const handleResponse = (response) => {
  if (!response.ok) {
    throw new Error()
  }

  return response.json()
}

export const logInService = async (payload) => {
  const response = await fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  return handleResponse(response)
}

export const chatService = async (prompt) => {
  const genAI = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY })

  const response = await genAI.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: prompt
  })

  return response.text
}
