export class HomeService {
    async getAllBanners() {
        const response = await fetch("http://127.0.0.1:5500/server/banners/index.get.json")
        const data = await response.json();
        
        return data;
    }

    async getAllCategories() {
        const response = await fetch("http://127.0.0.1:5500/server/categories/index.get.json")
        const data = await response.json();
        
        return data;
    }
}