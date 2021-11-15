export class ProductsService {
    async getProducts() {
        const products = await fetch("http://127.0.0.1:5500/server/products/index.get.json");
        const prod = await products.json();
        return prod;
    }
}