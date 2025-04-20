const handleResponse = (response) => {
  if (!response.ok) {
    throw new Error()
  }

  return response.json()
}

export const logInService = async (payload) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  return handleResponse(response)
}

export const chatService = async (prompt) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/ai`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: prompt })
  })

  return handleResponse(response)
}

export const pickNumberService = async (payload) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/pick-number`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  return handleResponse(response)
}

export const drawService = async () => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/draw`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return handleResponse(response)
}
