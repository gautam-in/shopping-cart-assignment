const fs = require('fs')
var cartSVG = fs.readFileSync('./client/assets/images/cart.svg', 'utf8')
module.exports = {
    vm: {},
    seoInfo: function (options) {
        const defaults = {
            title: '',
            description:
                'Sabka Bazar is all in one ecommerce platform for buying fmcg items',
            keywords: 'Groceries, Vegetanles, Home Cleaning',
        }
        const icons = {
            cartIcon: cartSVG,
        }
        var settings = Object.assign(defaults, options)
        this.vm.seoInfo = settings
        this.vm.icons = icons
        return this
    },
    productList: function (options) {
        this.vm.productList = options
        return this
    },
    miniCart: function (options) {
        this.vm.miniCart = options
        return this
    },
}
