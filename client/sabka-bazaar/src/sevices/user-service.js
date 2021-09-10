import axios_service from "./axios-service";
require('dotenv').config();
class UserService {
    constructor() {
        this.axios_service = new axios_service()
    }
    getAllCategories() {
        return this.axios_service.get(`${process.env.REACT_APP_API_URL}categories`);
    }
    getAllOffers(){
        return this.axios_service.get(`${process.env.REACT_APP_API_URL}banners`);
    }
    getAllProducts(){
        return this.axios_service.get(`${process.env.REACT_APP_API_URL}products`);
    }
    getCartData(){
        return this.axios_service.get(`${process.env.REACT_APP_API_URL}cart`);
    }
}
export default UserService;