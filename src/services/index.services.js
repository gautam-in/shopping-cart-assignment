import { CategoryService } from "./category.service";
import { ProductsService } from "./products.service";
import { CartService } from "./cart.service";


export const dependencies = [CategoryService, ProductsService, CartService];

export class ServiceRegistry {
    static services = new Map();

    static registerService(key, service) {
        this.services.set(key, service);
    }

    static getService(key) {
        return this.services.get(key);
    }
}