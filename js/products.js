var db;
var connection = window.indexedDB.open("cartItemsDB", 1);
connection.onsuccess = function (e) {
    db = e.target.result; // access to database
    console.log("Connection opened successfully !");
    // RetrieveCart()
    var txn = db.transaction(["items"], "readonly");
    var store = txn.objectStore("items");
    var request =  store.getAll();
    request.onsuccess = async function (e) {

      const arr = e.target.result
      const cartValue = document.querySelector(".item-count")
      cartValue.innerHTML = e.target.result.length + " items"
      const cartItems = document.querySelector('.cart-items')
    let query = ""
    for(let i = 0; i<arr.length;i++){
        query+=`id=${arr[i].id}&`
    }
    if(query!==""){
        const response = await fetch(`http://localhost:3000/products?${query}`)
        const data = await response.json()
        const final = data.map(data => ({...data, ...arr.find(arr => arr.id === data.id)}))

        const checkoutBtn = document.querySelector('.cart-message');
        const checkout = document.querySelector('.checkout');
        checkout.style.justifyContent = 'space-between'
        checkoutBtn.innerHTML="Proceed to Checkout"
        const button = document.querySelector(".total-price")
        button.style.display = 'block'
        const items = document.querySelector(".cart-items")
        console.log("itsms", items)
        let sum = final.reduce(function(acc, curr){
            acc = acc+ (curr.price * curr.count)

            return acc
        },0)
        button.innerHTML=`Rs.${sum}`
        removeElementsByClass('cartItm')
    
          for(let index = 0; index<final.length;index++){
            var cartElement = `<div class="cartItm">
            <img src=${final[index].imageURL} alt="" width="auto"/>
            <div class="item-detail">
              <div class="cart-itemname">${final[index].name}</div> 
              <div class="change-button">
                <div>
    
                <button class="btn-remove" id=${final[index].id}>-</button>
                <span>&nbsp;${final[index].count}&nbsp;</span> 
                <button class="btn-add" id=${final[index].id}>+</button>
                <span>x Rs. ${final[index].price}</span>
                </div>
               <span class="item-total">Rs. ${final[index].price*final[index].count}</span></div>
            </div>
            
          </div>`;
          cartItems.innerHTML+=cartElement
          }
                const add = document.querySelectorAll(".btn-add")
                for(let i = 0;i<add.length;i++){
                    add[i].addEventListener("click", (e)=>{
                        updateItemsInCart(add[i].id,"add")
                        RetrieveCart()
                        })
                }
                

                const remove = document.querySelectorAll(".btn-remove")
                for(let i = 0;i<remove.length;i++){
                    remove[i].addEventListener("click", (e)=>{
                        updateItemsInCart(remove[i].id,"remove")
                        RetrieveCart()
                        })
                }
    }
  
  }
  
}

  connection.onerror = function () {
    console.log("Error opening the connection !");
  };

  connection.onupgradeneeded = function (e) {
    db = e.target.result; // access to database
    var itemsOS = db.createObjectStore("items"); // table / collection
    itemsOS.createIndex("id", "id", { unique: true }); // (theindexname,thepropertynamefromobject,contraints)
  };

 function RetrieveCart() {
    var txn = db.transaction(["items"], "readonly");
    var store = txn.objectStore("items");
    var request =  store.getAll();
    request.onsuccess =async function (e) {
      const cartValue = document.querySelector(".item-count")
      cartValue.innerHTML = e.target.result.length + " items"
      const arr = e.target.result
      cartValue.innerHTML = e.target.result.length + " items"
      const cartItems = document.querySelector('.cart-items')
    let query = ""
    for(let i = 0; i<arr.length;i++){
        query+=`id=${arr[i].id}&`
    }

    if(query===""){
        const checkoutBtn = document.querySelector('.cart-message');
        const checkout = document.querySelector('.checkout');
        checkout.style.justifyContent = 'center'
        checkoutBtn.innerHTML="Start Shopping"
        const button = document.querySelector(".total-price")
        button.style.display = 'none'
    }

    if(query!==""){
        const response = await fetch(`http://localhost:3000/products?${query}`)
        const data = await response.json()

        const final = data.map(data => ({...data, ...arr.find(arr => arr.id === data.id)}))

        const checkoutBtn = document.querySelector('.cart-message');
        const checkout = document.querySelector('.checkout');
        checkout.style.justifyContent = 'space-between'
        checkoutBtn.innerHTML="Proceed to Checkout"
        const button = document.querySelector(".total-price")
        button.style.display = 'block'


        let sum = final.reduce(function(acc, curr){
            acc = acc+ (curr.price * curr.count)

            return acc
        },0)
        button.innerHTML=`Rs.${sum}`
        removeElementsByClass('cartItm')
    
          for(let index = 0; index<final.length;index++){
            var cartElement = `<div class="cartItm" id=${final[index].id}>
            <img src=${final[index].imageURL} alt="" width="auto"/>
            <div class="item-detail">
              <div class="cart-itemname">${final[index].name}</div> 
              <div class="change-button">
                <div>
    
                <button class="btn-remove" id=${final[index].id}>-</button>
                <span>&nbsp;${final[index].count}&nbsp;</span> 
                <button class="btn-add" id=${final[index].id}>+</button>
                <span>x Rs. ${final[index].price}</span>
                </div>
               <span class="item-total">Rs. ${final[index].price*final[index].count}</span></div>
            </div>
            
          </div>`;
          cartItems.innerHTML+=cartElement
          }
          const add = document.querySelectorAll(".btn-add")
                for(let i = 0;i<add.length;i++){
                    add[i].addEventListener("click", (e)=>{
                        updateItemsInCart(add[i].id,"add")
                        RetrieveCart()
                        })
                }
                

                const remove = document.querySelectorAll(".btn-remove")
                for(let i = 0;i<remove.length;i++){
                    remove[i].addEventListener("click", (e)=>{
                        updateItemsInCart(remove[i].id,"remove")
                        RetrieveCart()
                        })
                }


    }
    };
  }
function addItemsToCart(id) {

    var newItem = { id, count:1 };
    var txn = db.transaction(["items"], "readwrite");
    var store = txn.objectStore("items");
    var request = store.get(id)
    request.onsuccess = function(e){
        if(e.target.result){
            const data = e.target.result;
            data.count = data.count+1;
            store.put(data,data.id)
        }
        else{
            store.add(newItem, id); 
        }
    }
  }
  function updateItemsInCart(id,type) {
    //   console.log("i am", type);

    var newItem = { id, count:1 };
    var txn = db.transaction(["items"], "readwrite");
    var store = txn.objectStore("items");
    var request = store.get(id)
    request.onsuccess = function(e){
        if(type==="add"){
            const data = e.target.result;
            data.count = data.count+1;
            store.put(data,data.id)
        }
        else if(type==="remove"){

            console.log("her cosna")
            
            const data = e.target.result;
            if(data.count===1){
                //delete entry
                store.delete(data.id);
                const toRemove = document.querySelector(`.cart-items`).children[data.id]
                toRemove.parentNode.removeChild(toRemove)
            }
            else{
                data.count = data.count-1;
                store.put(data,data.id)
            }
           
        }
    }
  }

const fetchCategory = async () => {
    const  response = await fetch("http://localhost:3000/categories")
    const data = await response.json()
    createHTMLForCategory(data)
}
fetchCategory()

async function createHTML(itemData) {
    var finalData = {
        products:itemData
    }
    var rawTemplate = document.getElementById("item__template").innerHTML
    var compiledTemplate = Handlebars.compile(rawTemplate)
    var generatedHTML = compiledTemplate(finalData)
    var p_container = document.querySelector(".product__container");
    p_container.innerHTML = generatedHTML;

    window.indexedDB =
window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB;

if (!window.indexedDB) {
    alert("Your browser does not support Indexed DB !");
  } else {
    var btnAdd = document.querySelectorAll(".buy__button");
    for(let index = 0; index<btnAdd.length;index++){
        btnAdd[index].addEventListener("click", async (e) => {
            e.preventDefault()
            addItemsToCart(e.target.parentNode.parentNode.id, )
            RetrieveCart()

        })
    }
  }

}

async function createHTMLForCategory(itemData) {
    var finalData = {
        categories:itemData
    }
    var rawTemplate = document.getElementById("category__template").innerHTML
    var compiledTemplate = Handlebars.compile(rawTemplate)
    var generatedHTML = compiledTemplate(finalData)
    var p_container = document.querySelector(".category__container");
    p_container.innerHTML = generatedHTML;
    let redirection = false

    if(window.location.search){
        const response = await fetch(`http://localhost:3000/products?category=${window.location.search.substring(1)}`)
        const data = await response.json()
        createHTML(data)
    }
    else{
        var first =  document.querySelector(".cat")
        const response = await fetch(`http://localhost:3000/products?category=${first.id}`)
                const data = await response.json()
                createHTML(data)
    }
    var allCats =  document.querySelectorAll(".cat")
    for(let index = 0; index<allCats.length;index++){
        allCats[index].addEventListener("click", async (e) => {
            const  response = await fetch(`http://localhost:3000/products?category=${e.target.id}`)
            const data = await response.json()
            createHTML(data)
        })
    }
}

const fetchCategoryMobile = async () => {
    const  response = await fetch("http://localhost:3000/categories")
    var data = await response.json()

    let accordion_content = document.querySelector(".accordion")

    for(let i=data.length-1;i>=0;i--){
        
        var dynamicElement = `<section class="content__box" id="${data[i].id}" >

        <div class="label" >
            ${data[i].name}
        </div>
    </section>
    
    `;

     accordion_content.insertAdjacentHTML('afterbegin',dynamicElement)

    }

    const accordion = document.getElementsByClassName('content__box')


    for(let i = 0; i<accordion.length;i++){
        accordion[i].addEventListener('click',async function(e){
            e.preventDefault()
            const  response = await fetch(`http://localhost:3000/products?category=${accordion[i].id}`)
            const productList = await response.json()

            let products = document.getElementById(`${accordion[i].id}`)


            if(!this.classList[1]){
                removeElementsByClass('content')
                for(let index = 0; index<productList.length;index++){
                    var dynamicElement = `
                    <div class="content active">
                    <div>
                    <h4>${productList[index].name}</h4>
                    <div class="item">
                            <div class="image">
                            <img src=${productList[index].imageURL} alt=${productList[index].name} height="160px" >
                            </div>
                            <div class="description" id=${productList[index].id}>
                            <p class="product-info">${productList[index].description}</p>
                            <button class="buy__button">Buy Now</button>
                            </div>
                            </div>
                      </div>
                </div>
                            `;
    
                products.insertAdjacentHTML("afterend",dynamicElement)
                }
                var btnAdd = document.querySelectorAll(".buy__button");

                for(let index = 0; index<btnAdd.length;index++){
                    btnAdd[index].addEventListener("click", async (e) => {
                        e.preventDefault()
                        let body = {}
                        let url =""
                        let method = ""

                        addItemsToCart(e.target.parentNode.id)
                        RetrieveCart()
            
                    })
                }
            }
            else{
                removeElementsByClass('content')
            }

            this.classList.toggle('active')
            
        })
    }
}
fetchCategoryMobile()


function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}



