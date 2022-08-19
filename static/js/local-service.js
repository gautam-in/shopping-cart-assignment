class MyLocalService {
    constructor(host, port, UseLiveServer, path, secure) {
        this.UseLiveServer = UseLiveServer || false;
        if (this.UseLiveServer) {
            path = path ? "server/" + path : "server";
        }
        this.Service = WebServiceModule.getInstance(host, port, path, secure);
    }
    GetOffers() {
        let path = this.UseLiveServer ? 'banners/index.get.json' : 'banners';
        return this.Service.FetchPath(path);
    }
    GetProducts() {
        let path = this.UseLiveServer ? 'products/index.get.json' : 'products';
        return this.Service.FetchPath(path);
    }
    GetCategories() {
        let path = this.UseLiveServer ? 'categories/index.get.json' : 'categories';
        return this.Service.FetchPath(path);
    }
}