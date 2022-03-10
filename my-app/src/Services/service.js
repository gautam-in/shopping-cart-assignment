import axios from "axios";

let serverUrl = "http://localhost:5000"

export default class Services{
    getBanners()
    {
        return axios.get(serverUrl+"/banners")
    }

    getCategories()
    {
        return axios.get(serverUrl+"/categories")
    }

    getProducts()
    {
        return axios.get(serverUrl+"/products")
    }

    postProductDetails(id)
    {
        return axios.post(serverUrl+"/addToCart",id)
    }
}