var categories;
var products;
var cartItems = [];

function loadCategories() {

    getCategories().then(response => {
        categories = response.data.data
        categories.sort((a, b) => (a.order > b.order) ? 1 : -1)

        const parentElement = document.getElementById("categories")
        parentElement.innerHTML = ""
        for (let product of categories) {
            let elem = document.createElement("span")
            elem.innerHTML = `
            <home-page-card
            id = ${product.id}
            order = ${product.order}
            name = ${product.name}
            key = ${product.key}
            imgURL = ${product.imageUrl}
            description =  \"` + product.description + `\"
            class = flexdiv
            >
                </home-page-card>
            `
            if (product.order > 0) {
                parentElement.appendChild(elem)
            }
        }

    }).catch(error => {
        let body = document.body
        body.innerHTML = "Oops! Service Unavailable " + error
        body.style.display = "flex"
        body.style.justifyContent = "center"
        body.style.alignItems = "center"
    })
}

function loadBanners() {
    getBanners().then(response => {
        let data = response.data.data
        data.sort((a, b) => (a.order > b.order) ? 1 : -1)
        const parentElement = document.getElementById("carousel")
        for (let banner of data) {
            var divElement = document.createElement("div")
            divElement.classList.add("carousel-item")
            if (banner.order === 1) {
                divElement.classList.add("active")
            }
            divElement.innerHTML = `
            <img src=${banner.bannerImageUrl} class="d-block w-100" alt= \"` + banner.bannerImageAlt + `\">
            `
            parentElement.appendChild(divElement)

        }


    })
}

function loadProduct(id) {
    getProducts().then(response => {
        let data = response.data.data
        const parentElement = document.getElementById("productList")
        parentElement.innerHTML = ""
        for (let product of data) {
            if (product.category === id) {
                const containerDiv = document.createElement("div")
                containerDiv.classList.add("productCard")
                const title = document.createElement("h2")
                title.innerHTML = product.name
                const img = document.createElement("img")
                img.src = product.imageURL
                const descriptionDiv = document.createElement("div")
                descriptionDiv.classList.add("product-description")
                descriptionDiv.innerHTML = product.description
                const footerDiv = document.createElement("div")
                footerDiv.classList.add("product-div")
                const footerSpan = document.createElement("span")
                footerSpan.innerHTML = "MRP Rs." + String(product.price)
                const buyButton = document.createElement("button")
                buyButton.innerHTML = "Buy Now"
                buyButton.addEventListener("click", (event) => {
                    buyNowHandeler(product)
                })
                footerDiv.appendChild(footerSpan)
                footerDiv.appendChild(buyButton)
                containerDiv.appendChild(title)
                containerDiv.appendChild(img)
                containerDiv.appendChild(descriptionDiv)
                containerDiv.appendChild(footerDiv)
                parentElement.appendChild(containerDiv)
            }

        }
    })
}

function createCategoriesSidebar(id) {
    const parentElement = document.getElementById("sidebar")
    parentElement.innerHTML = ""
    for (let category of categories) {
        if (category.order > 0) {
            const button = document.createElement("button")
            button.innerHTML = category.name
            button.classList.add("sidebar-button")
            button.addEventListener("click", (event) => {
                loadProduct(category.id)
            })
            parentElement.appendChild(button)
        }
        if (id === undefined && category.order === 1) {
            loadProduct(category.id)
        } else if (category.id == id) {
            loadProduct(category.id)
        }

    }
}

function buyNowHandeler(product) {
    let checkProduct = cartItems.filter(obj => obj.product.id === product.id)
    if (checkProduct.length === 0) {
        cartItems.push({
            product: product,
            count: 1
        })
    } else {
        cartItems[cartItems.indexOf(checkProduct[0])].count += 1
    }
    let totalItems = 0
    cartItems.map(value => {
        totalItems += value.count
    })
    document.getElementById("cart-count").innerHTML = String(totalItems) + " Items"
    document.getElementById("cartTitle").innerHTML = ' (' + String(totalItems) + " Items)"
    addToCart().then(response => {
        console.log(response)
    })
}

function onCartClick() {
    const parentElement = document.getElementById("cartBody")
    parentElement.innerHTML = ""
    if (cartItems.length === 0) {
        parentElement.classList.add("center")
        parentElement.style.height = "82%"
        const title = document.createElement("h2")
        title.innerHTML = "No items in your cart"
        const span = document.createElement("span")
        span.innerHTML = "Your favourite items are just a click away"
        span.style.fontSize = "smaller"
        const containerDiv = document.createElement("div")
        containerDiv.style.textAlign = "center"
        containerDiv.style.display = "block"
        containerDiv.style.width = "100%"
        containerDiv.appendChild(title)
        containerDiv.appendChild(span)
        parentElement.appendChild(containerDiv)
        document.getElementById("onItems").style.display = "none"
        document.getElementById("noItems").style.display = "block"
    } else {
        parentElement.classList.remove("center")
        parentElement.style.height = 10
        let totalCartCost = 0
        for (let item of cartItems) {
            const containerDiv = document.createElement("div")
            containerDiv.classList.add("cart-card")
            const img = document.createElement("img")
            img.src = item.product.imageURL
            img.alt = item.product.name
            containerDiv.appendChild(img)
            const cartMain = document.createElement("div")
            cartMain.classList.add("cart-main")
            const title = document.createElement("h2")
            title.innerHTML = item.product.name
            cartMain.appendChild(title)
            const cartDetails = document.createElement("div")
            cartDetails.classList.add("cart-details")
            const decrementButton = document.createElement("button")
            const incrementButton = document.createElement("button")
            const quantity = document.createElement("span")
            decrementButton.classList.add("increment-button")
            incrementButton.classList.add("increment-button")
            quantity.innerHTML = item.count
            incrementButton.innerHTML = "+"
            decrementButton.innerHTML = "-"
            const x = document.createElement("span")
            x.innerHTML = "x"
            const price = document.createElement("span")
            price.innerHTML = "Rs." + item.product.price
            const total = document.createElement("span")
            total.classList.add("item-total")
            total.id = "item-total"
            totalCartCost += item.count * item.product.price
            total.innerHTML = "Rs." + String(item.count * item.product.price)
            cartDetails.appendChild(decrementButton)
            cartDetails.appendChild(quantity)
            cartDetails.appendChild(incrementButton)
            cartDetails.appendChild(x)
            cartDetails.appendChild(price)
            cartDetails.appendChild(total)
            cartMain.appendChild(cartDetails)
            containerDiv.appendChild(cartMain)
            parentElement.appendChild(containerDiv)
        }
        parentElement.innerHTML += `<div class="space-between lowest-price">
        <img src="./static/images/lowest-price.png"> 
        <span>You won't find it cheaper anywhere</span>            
</div>`
        document.getElementById("total").innerHTML = "Rs."+ totalCartCost +"&nbsp;	&nbsp;>"
        document.getElementById("onItems").style.display = "block"
        document.getElementById("noItems").style.display = "none"
    }
}

function renderProduct(id) {
    hideAll();
    createCategoriesSidebar(id);
    document.getElementById("products").style.display = "flex";
}

function hideAll() {
    document.getElementById("categories").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("banner").style.display = "none";
    document.getElementById("products").style.display = "none";
    document.getElementById("login").style.display = "none";

}

function onLoginClick() {
    hideAll()
    document.getElementById("login").style.display = "flex";
}

function onHomeClick() {
    hideAll()
    document.getElementById("banner").style.display = "block";
    document.getElementById("categories").style.display = "block";
}

function onRegisterClick() {
    hideAll()
    document.getElementById("register").style.display = "flex";
}

function onProductClick() {
    hideAll();
    createCategoriesSidebar(undefined);
    document.getElementById("products").style.display = "flex";
}

function inputFocusHandler(id, disp) {
    document.getElementById(id).style.display = disp
}

loadBanners()
loadCategories()