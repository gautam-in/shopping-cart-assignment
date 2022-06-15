

export default function HttpGateway() {

    this.getProductList = function () {

        return fetch('/static/server/products/index.get.json').then(res => res.json())
    }
    this.getCategories = function () {
        return fetch('/static/server/categories/index.get.json').then(res => res.json())
    }
    this.getOffers=function(){
        return fetch('/static/server/banners/index.get.json').then(res => res.json())

    }
}

