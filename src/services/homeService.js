export class HomeService {
    async getAllBanners() {
        const response = await fetch("http://localhost:3000/server/banners/index.get.json")
        const data = await response.json();
        
        return data;
    }

    async getAllCategories() {
        const response = await fetch("http://localhost:3000/server/categories/index.get.json")
        const data = await response.json();
        
        return data;
    }
}