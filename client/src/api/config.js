import axios from "axios";

// Create an instance of Axios
const api = axios.create({
  baseURL: "http://localhost:5000",
});

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // Return the response if it's successful
    return response;
  },
  (error) => {
    // Handle generic errors
    if (error.response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      console.error(
        "Response Error:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No Response Error:", error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.error("Request Error:", error.message);
    }

    // Return a rejected Promise with the error
    return Promise.reject(error);
  }
);

export default api;
