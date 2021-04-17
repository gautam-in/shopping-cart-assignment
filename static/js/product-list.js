//Used class Inheritance
//Parent class Product
class Product {
    constructor(){
        var products = []
                this.products = products
                console.log("hello product",products)
        }
        //card template created for fetch data
    getProductCard = (response) => {
        console.log("hello response", response)
       let contentBlock = "";
        response.forEach(element => {
            contentBlock += `<div class="product-list__products">
                                <h3>${element.name}</h3>
                                <img class="product-list__products--img" src="${element.imageURL}" alt="${element.name}">
                                <p>${element.description}</p>
                                <div class="product-list__products--button">
                                <div class="price">MRP Rs.${element.price}</div>
                                <button id="buy-now" aria-label="Byu Now" class="btn btn-primary product-list__products--item" value=${element.id}>${CONSTANTS.buy}</button>
                            </div>
                            <div class="product-list__products--mob-button">
                                <button id="buy-now" aria-label="Byu Now" class="btn btn-primary product-list__products--item" value=${element.id}>${CONSTANTS.buy} @ MRP Rs.${element.price}</button>
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
        getProductList(){
            apiService.getProductList({url: END_POINTS.PRODUCTS})
            .then(res => {
                this.products = res;
                document.getElementsByClassName("product-list")[0].innerHTML = this.getProductCard(this.products);
               
            })
        }

         // Call get Categories List method to fetch data from API for side menu
   
        getCategories(){
            apiService.getCategories({url: END_POINTS.CATEGORIES})
            .then(res => {
                let contentBlock = "";
                res.forEach(element => {
                    if(element.enabled){
                        contentBlock+= `<div class="sidebar__items--menu" id=${element.id} onclick="productList.filterProducts('${element.id}', '${element.name}')"><p>${element.name}</p></div>`
                    }
                });
                document.getElementsByClassName("sidebar__items")[0].innerHTML = contentBlock;
            });
        }

      //filter product categories
        filterProducts( id, name){
            console.log("id", id)
            let status = productList.addClass(id);
            if(window.matchMedia("screen and (max-width: 767px)").matches){
                document.querySelector(".sidebar__action--mobile").textContent = name;
                document.querySelector(".sidebar__items").style.display = "none";
            }
            // Retrun the value according to categories id
            let filtered = this.products.filter(item => {
                console.log("category id", item.category, id)
                return item.category == id;
            });
            document.getElementsByClassName("product-list")[0].innerHTML = this.getProductCard(status===true ? filtered : products);
        }
        
       // add active class when selected category
    addClass(id) {
            var els = document.querySelectorAll('.sidebar__items--menu.active');
            var previous_id = 0;
            var status = false;
            for (var i = 0; i < els.length; i++) {
                els[i].classList.remove('active');
                previous_id = els[i].id;
            }
            if(previous_id !== id){
                var element = document.getElementById(id);
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

document.querySelector(".sidebar__action").addEventListener("click", function() {
    document.querySelector(".sidebar__items").style.display = "block";
});