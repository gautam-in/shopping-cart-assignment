/* eslint-disable no-return-await */
// Common class for interacting with APIs
export default class EcommService {
  constructor(url = 'http://localhost:5000/') {
    this.url = url;
  }

  async getProducts() {
    const data = await fetch(`${this.url}products`);
    return await data.json();
  }

  async getCategories() {
    const data = await fetch(`${this.url}categories`);
    return await data.json();
  }

  async getBanners() {
    const data = await fetch(`${this.url}banners`);
    return await data.json();
  }

  async addToCart(id) {
    const data = await fetch(`${this.url}addToCart/`, {
      method: 'POST',
      body: JSON.stringify({ productId: id }),
    });
    return await data.json();
  }
}
