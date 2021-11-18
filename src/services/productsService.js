export class ProductsService {
    async getProducts() {
        const products = await fetch("http://localhost:3000/server/products/index.get.json");
        const prod = await products.json();
        return prod;
    }
}