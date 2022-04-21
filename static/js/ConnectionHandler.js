const host = "http://localhost:3000/"

function getProducts() {
  return axios.get(host + "products", {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

function getCategories() {
  return axios.get(host + "categories", {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

function getBanners() {
  return axios.get(host + "banners", {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

function addToCart() {
  return axios.post(host + "addToCart", {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}