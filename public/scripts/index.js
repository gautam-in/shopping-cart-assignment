
let cart = JSON.parse(sessionStorage.getItem('cart'))||[];
let products = [];
let totalPrice = null;
let categories = [];

async function loadData() {
    try {
        await loadCategories();
        await loadProducts();
        renderCart();
    }catch(error) {
        console.log('error',error);
    }
    
}

async function loadCategories() {
    try {
        const response  = await fetch(API_PATH.categoriesUrl);
        categories = await response.json();
    } catch(error){
        console.log("error",error);
    }    

}

//function to load products initially
async function loadProducts() {
    try {
        const response = await fetch(API_PATH.productsUrl); 
        products = await response.json();
    }catch(error) {
        console.log("error", error);
    }
    
}


loadData();

    