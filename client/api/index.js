import axios from 'axios'
const BASE_URL = 'http://localhost:5000'

export default class API {
    constructor(data = []) {
        this.data = data
    }

    async get(action) {
        let url = `${BASE_URL}${action}`;
        try {
            const response = await axios.get(url);
            let res = this.handleResponse(response);
            return res
        } catch (error) {
            this.handleError(error)
        }
    }

    async post(action) {
        let url = `${BASE_URL}${action}`
        try {
            const response = await axios.post(url);
            let res = this.handleResponse(response);
            return res
        } catch (error) {
            this.handleError(error)
        }
    }

    handleResponse(response) {
        return response.data || this.data
    }

    handleError(error) {
        console.error(error)
        alert('Something Went Wrong')
    }
}

