class Server {
  constructor(hostname = "localhost", port = 8000) {
    this.hostname = hostname;
    this.port = port;
    this.url = `http://${this.hostname}:${this.port}/`;
  }

  async fetchProducts() {
    try {
      const res = await fetch(`${this.url}/products`, { method: "GET" });
      
      return await res.json();
    } catch (err) {
      return err.message;
    }
  }

  async fetchBanners() {
    try {
      const res = await fetch(`${this.url}/banners`, { method: "GET" });
      

      return await res.json();
    } catch (err) {
      return err.message;
    }
  }

  async fetchCategories() {
    try {
      const res = await fetch(`${this.url}/categories`, { method: "GET" });
      

      return await res.json();
    } catch (err) {
      return err.message;
    }
  }

  async addToCart(product_id) {
    try {
      const res = await fetch(`${this.url}/addToCart`, {
        method: "POST",
        body: `product_id=${product_id}`,
      });
      
      return await res.json();
    } catch (err) {
      return err.message;
    }
  }
}

export default Server;
