// Common class for interacting with APIs
export class ApiInteraction {

    constructor() {
        this.url = 'http://localhost:5000/';
    }

    async getProducts() {
        let data = await fetch(`${this.url}products`);
        data = await data.json();
        return data;
    }

    async getCategories() {
        let data = await fetch(`${this.url}categories`);
        data = await data.json();
        return data;
    }

    async getBanners() {
        let data = await fetch(`${this.url}banners`);
        data = await data.json();
        return data;
    }

    async addToCart(id) {
        let data = await fetch(`${this.url}addToCart/`, {
            method: "POST",
            body: JSON.stringify({ productId: id })
        });
        data = await data.json();
        return data;
    }

}