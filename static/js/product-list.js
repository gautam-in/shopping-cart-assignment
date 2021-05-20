//Used class Inheritance
//Parent class Product
class Product { 
    constructor() {
        let products=[]
                this.products = products
        }
    
        //card template created for fetch data
    getProductCard = (response) => {
        localStorage.setItem('product', JSON.stringify(response));
       let contentBlock = "";
        response.forEach(element => {
            contentBlock += `<div class="product-list__products">
                                <h3>${element.name}</h3>
                                <img class="product-list__products--img" src="${element.imageURL}" alt="${element.name}">
                                <p>${element.description}</p>
                                <div class="product-list__products--button">
                                <div class="price">MRP Rs.${element.price}</div>
                                <button id="buy-now" aria-label="Buy Now" class="btn btn-primary product-list__products--item" value=${element.id}>${CONSTANTS.buy}</button>
                            </div>
                            <div class="product-list__products--mob-button">
                                <button id="buy-now" aria-label="Buy Now" class="btn btn-primary product-list__products--item" value=${element.id}>${CONSTANTS.buy} @ MRP Rs.${element.price}</button>
                            </div>
                            </div>`;     
                        });
        return contentBlock;
    };
}


//Child class ProductList extend the base class Product
class ProductList extends Product{
    constructor(products){
        super(products)
    }
    
     //Call get category list API to fetch the data from API
        getProductList = () => {
            apiService.getProductList({url: END_POINTS.PRODUCTS})
            .then(res => {
                this.products = res;
                document.getElementsByClassName("product-list")[0].innerHTML = this.getProductCard(this.products);
                this.registerListenerForBuyNowButton();
            })
        }

        registerListenerForBuyNowButton = () =>{
            let addToCartButton = document.querySelectorAll("button#buy-now.btn.btn-primary.product-list__products--item"); 
            addToCartButton.forEach((addToCartButton)=>{
                addToCartButton.addEventListener("click", 
               (e)=>{
                apiService.addToCart({url: END_POINTS.ADDTOCART, id: (e.target.value)})
                .then(res => {
                    if(res.status === 200){
                        this.product=localStorage.getItem('product');
                        if(this.product){
                           this.product =JSON.parse(this.product)
                        }
                        let quantity = parseInt(document.getElementById(CONSTANTS.CART_ITEM_QUANTITY).textContent)+1
                        document.getElementById(CONSTANTS.CART_ITEM_QUANTITY).textContent = quantity;
                        let filtered = (this.product || []).filter(item => {
                            return item.id == e.target.value;
                        });
                        if(filtered && filtered.length>0){ 
                        cart.setSession(filtered[0]);
                        } //Set Session
                    }
                });
               })
               
            });
        };


         // Call get Categories List method to fetch data from API for side menu
   
        getCategories=()=>{
            apiService.getCategories({url: END_POINTS.CATEGORIES})
            .then(res => {
                let contentBlock = "";
                res.forEach(element => {
                    if(element.enabled){
                        contentBlock+= `<div tabindex="0" class="sidebar__items--menu" id=${element.id} onclick="productList.filterProducts('${element.id}', '${element.name}')"><p>${element.name}</p></div>`
                    }
                });
                document.getElementsByClassName("sidebar__items")[0].innerHTML = contentBlock;
            });
        }

      //filter product categories
        filterProducts=( id, name)=>{
            let status = productList.addClass(id);
            if(window.matchMedia("screen and (max-width: 767px)").matches){
                document.querySelector(".sidebar__action--mobile").textContent = name;
                document.querySelector(".sidebar__items").style.display = "none";
            }
            // Retrun the value according to categories id
            let filtered = this.products.filter(item => {
                return item.category == id;
            });
            
            document.getElementsByClassName("product-list")[0].innerHTML = this.getProductCard(status===true ? filtered : products);
            this.registerListenerForBuyNowButton();
            
        }
        
       // add active class when selected category
    addClass=(id)=> {
            let els = document.querySelectorAll('.sidebar__items--menu.active');
            let previous_id = 0;
            let status = false;
            for (let i = 0; i < els.length; i++) {
                els[i].classList.remove('active');
                previous_id = els[i].id;
            }
            if(previous_id !== id){
                let element = document.getElementById(id);
                element.classList.add("active");
                status = true;
            }
            return status;
        }
    }
    // created instance of class 
const productList = new ProductList()
productList.getProductList();
productList.getCategories();
productList.registerListenerForBuyNowButton();

//for mobile sidemenu dropdown open
document.querySelector(".sidebar__action").addEventListener("click", ()=> {
    document.querySelector(".sidebar__items").style.display = "block";
});

