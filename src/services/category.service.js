import { BaseService } from "./base.service";

export class CategoryService extends BaseService {
    categories = [];
    constructor() {
        super();
        this.categories = JSON.parse(this.ls.getItem('categories') || '[]');
    }
    
    async getCategories() {
        if (this.categories.length > 0) {
            return this.categories;
        }
        const response = await this.get('/categories')
        this.ls.setItem('categories', JSON.stringify(response));
        return response;
    }

    async getCategoryNames() {
        await this.getCategories();
        this.categories.map(cat => cat.name);
    }

    async getBanners() {
        return await this.get('/banners');
    }
}