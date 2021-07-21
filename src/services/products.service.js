import { BaseService } from "./base.service";

export class ProductsService extends BaseService {
    products = [];
    constructor() {
        super();
        this.products = JSON.parse(this.ls.getItem('products') || '[]');
    }
    
    async getAll() {
        if (this.products.length > 0) {
            return this.products;
        }
        const response = await this.get('/products');
        this.ls.setItem('products', JSON.stringify(response));
        return response;
    }

    async getProducts(category) {
        const allProducts = await this.getAll();
        return allProducts.filter(prod => prod.category === category);
    }

    async getProduct(id) {
        const allProducts = await this.getAll();
        return allProducts.find(prod => prod.id === id);
    }
}