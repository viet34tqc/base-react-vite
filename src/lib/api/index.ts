import axios from 'axios'

// Create an axios instance
const api = axios.create({
  baseURL: 'https://api.example.com', // Set your API base URL here
  timeout: 10000, // Timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    // Modify the request configuration here (e.g., add authorization token)
    const token = localStorage.getItem('authToken') // Get token from storage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    console.log('Request sent to', config.url) // Optional logging
    return config
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error)
  },
)

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    // Process the response data here
    console.log('Response received:', response)
    return response
  },
  (error) => {
    // Handle response errors (e.g., show an error message)
    if (error.response) {
      console.error('API error', error.response.status)
    } else {
      console.error('Network or other error', error.message)
    }
    return Promise.reject(error)
  },
)

export default api
