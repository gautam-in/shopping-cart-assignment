let categoryId,prevId,cartUpdated;
let itemCount =0;
let itemList = [];
let itemsinCart =[];
/*
class shoppingCart {
  let itemList =[];
  constructor(products) {
    this.products = products;
  }
  buy(id){
           const url = `http://localhost:5000/addToCart`;
            fetch(url, {
            method: 'POST',
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({'id':id}),
            }).then(function(response) {
              if(response.status === 200) {
                itemCount=itemCount+1;
                setCount();
                const url = window.location.origin + "/updateCart";
                  fetch(url, {
                  method: 'POST',
                   headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                  body: JSON.stringify({'cartCount':itemCount}),
                  }).then((resp)=>{
                    if(!itemList.length){
                       itemList.push({'qty':1,'id':id});
                     } else {
                      let x = itemList.findIndex(x=>x.id == id)
                      if(x !== -1){
                        itemList[x].qty+=1
                      }else {
                        itemList.push({'qty':1,'id':id});
                      }
                     }
                     cartUpdated = true;
                     itemsinCart =[];
                     
                    localStorage.setItem("itemList",JSON.stringify(itemList));
                  })


                
              }
            });
  }
  function update(event,flag){
    let id =event.classList[1].split("-")[1]
    const index =itemsinCart.findIndex(item=>item.id ==id);
    itemsinCart[index].qty=flag?itemsinCart[index].qty+1:itemsinCart[index].qty-1;
    itemCount= flag?itemCount+1:itemCount-1;
    setCount();
    document.getElementById(`item-price-${id}`).innerHTML = itemsinCart[index].qty;
    document.getElementById(`item-total-${id}`).innerHTML = `Rs.${itemsinCart[index].qty* itemsinCart[index].price}`;
    if( itemsinCart[index].qty === 0){
      itemsinCart.splice(index,1);
    }
    renderCart(itemsinCart);
    calcSum();
  }

  function calcSum(){
    let totalprice = itemsinCart.reduce((sum,x)=>{
        sum = sum+x.qty*x.price;
        return sum;    
    },0);
    document.getElementById(`totalprice`).innerHTML = `Rs.${totalprice}&nbsp;&nbsp;>`;
  }
  function showCart(){
    if(cartUpdated){

      let itemList =JSON.parse(localStorage.getItem("itemList"));
     let products =JSON.parse(localStorage.getItem("products"));
     itemList.forEach(item=>{
      let product =products.find(product=>product.id == item.id);
        product.qty = item.qty;
      itemsinCart.push(product);
     });
     let html='';
     console.log(itemsinCart);
     for(let i=0;i<itemsinCart.length;i++) {
      let item = itemsinCart[i];
        html+=`<div class="row cart-item">
                  <div class="col span-3-of-12"><img src="${itemsinCart[i].imageURL}"></div>
                  <div class="col span-9-of-12">
                    <div class="label"> ${itemsinCart[i].name}</div>
                      <div class="row">
                        <div class="col span 1-of-2 qty-ctr paddingTop10">
                            <span class="dot id-${item.id}" id=${item.id} onclick="update(event.target,true)">+</span>
                            <span class="item-price" id="item-price-${item.id}">${itemsinCart[i].qty}</span>
                            <span class="dot  id-${item.id}" onclick="update(event.target,false)">-</span>
                            <span>x</span>
                            <span>Rs.${itemsinCart[i].price}</span>
                        </div>
                        <div class="col span-1-of-2 price-ctr" id="item-total-${item.id}">Rs.${itemsinCart[i].price*itemsinCart[i].qty}
                        </div>
                      </div>
                  </div>
                </div>`;
     }
     document.getElementsByClassName("cart-box")[0].innerHTML =html;
     calcSum();  
    }
     document.getElementsByClassName("parent-overlay")[0].style.display ='block';
     cartUpdated = false; 

  }
  function renderCart(itemsinCart){
    let html ='';
    for(let i=0;i<itemsinCart.length;i++) {
      let item = itemsinCart[i];
        html+=`<div class="row cart-item">
                  <div class="col span-3-of-12"><img src="${itemsinCart[i].imageURL}"></div>
                  <div class="col span-9-of-12">
                    <div class="label"> ${itemsinCart[i].name}</div>
                      <div class="row">
                        <div class="col span 1-of-2 qty-ctr paddingTop10">
                            <span class="dot id-${item.id}" id=${item.id} onclick="update(event.target,true)">+</span>
                            <span class="item-price" id="item-price-${item.id}">${itemsinCart[i].qty}</span>
                            <span class="dot  id-${item.id}" onclick="update(event.target,false)">-</span>
                            <span>x</span>
                            <span>Rs.${itemsinCart[i].price}</span>
                        </div>
                        <div class="col span-1-of-2 price-ctr" id="item-total-${item.id}">Rs.${itemsinCart[i].price*itemsinCart[i].qty}
                        </div>
                      </div>
                  </div>
                </div>`;
     }
     document.getElementsByClassName("cart-box")[0].innerHTML =html;
  }

  function setCount(){
    document.getElementsByClassName("cartNumber")[1].innerHTML=`${itemCount} items` ;
         document.getElementsByClassName("cartNumber")[0].innerHTML=`${itemCount} items` ;
  }
}
let products = JSON.parse(localStorage.getItem("products"));
let cart =new shoppingCart(products);*/
//console.log(s.getItem());
/*
let shoppingCart = (function () {
        let slideIndex = 1;
        let categoryId,prevId;
        
        function selectCategory(id){
          categoryId = id;
          let prevUrl =window.location.href.split("/");
          let prevId = prevUrl[prevUrl.length -1];
          let diffUrl = categoryId !== prevId;
          window.location.href = diffUrl? `/products/${id}`:'/products';

        }
        function buy(id) {
           const url = `http://localhost:5000/addToCart`;
           console.log(id);
            fetch(url, {
            method: 'POST',
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({'id':id}),
            }).then(function(response) {
              if(response.status === 200) {
                itemCount=itemCount+1;
                setCount();
                const url = window.location.origin + "/updateCart";
                  fetch(url, {
                  method: 'POST',
                   headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                  body: JSON.stringify({'cartCount':itemCount}),
                  }).then((resp)=>{
                    if(!itemList.length){
                       itemList.push({'qty':1,'id':id});
                     } else {
                      let x = itemList.findIndex(x=>x.id == id)
                      if(x !== -1){
                        itemList[x].qty+=1
                      }else {
                        itemList.push({'qty':1,'id':id});
                      }
                     }
                     cartUpdated = true;
                     itemsinCart =[];
                     
                    localStorage.setItem("itemList",JSON.stringify(itemList));
                  })


                
              }
            });
        }

        function update(event,flag){
          let id =event.classList[1].split("-")[1]
          const index =itemsinCart.findIndex(item=>item.id ==id);
          itemsinCart[index].qty=flag?itemsinCart[index].qty+1:itemsinCart[index].qty-1;
          itemCount= flag?itemCount+1:itemCount-1;
          setCount();
          document.getElementById(`item-price-${id}`).innerHTML = itemsinCart[index].qty;
          document.getElementById(`item-total-${id}`).innerHTML = `Rs.${itemsinCart[index].qty* itemsinCart[index].price}`;
          if( itemsinCart[index].qty === 0){
            itemsinCart.splice(index,1);
          }
          renderCart(itemsinCart);
          calcSum();
        }

        function calcSum(){
        let totalprice = itemsinCart.reduce((sum,x)=>{
            sum = sum+x.qty*x.price;
            return sum;    
        },0);
         document.getElementById(`totalprice`).innerHTML = `Rs.${totalprice}&nbsp;&nbsp;>`;

        }
        function showCart(){
          if(cartUpdated){

            let itemList =JSON.parse(localStorage.getItem("itemList"));
           let products =JSON.parse(localStorage.getItem("products"));
           itemList.forEach(item=>{
            let product =products.find(product=>product.id == item.id);
              product.qty = item.qty;
            itemsinCart.push(product);
           });
           let html='';
           console.log(itemsinCart);
           for(let i=0;i<itemsinCart.length;i++) {
            let item = itemsinCart[i];
              html+=`<div class="row cart-item">
                        <div class="col span-3-of-12"><img src="${itemsinCart[i].imageURL}"></div>
                        <div class="col span-9-of-12">
                          <div class="label"> ${itemsinCart[i].name}</div>
                            <div class="row">
                              <div class="col span 1-of-2 qty-ctr paddingTop10">
                                  <span class="dot id-${item.id}" id=${item.id} onclick="update(event.target,true)">+</span>
                                  <span class="item-price" id="item-price-${item.id}">${itemsinCart[i].qty}</span>
                                  <span class="dot  id-${item.id}" onclick="update(event.target,false)">-</span>
                                  <span>x</span>
                                  <span>Rs.${itemsinCart[i].price}</span>
                              </div>
                              <div class="col span-1-of-2 price-ctr" id="item-total-${item.id}">Rs.${itemsinCart[i].price*itemsinCart[i].qty}
                              </div>
                            </div>
                        </div>
                      </div>`;
           }
           document.getElementsByClassName("cart-box")[0].innerHTML =html;
           calcSum();  
          }
           document.getElementsByClassName("parent-overlay")[0].style.display ='block';
           cartUpdated = false; 

        }
        function renderCart(itemsinCart){
          let html ='';
          for(let i=0;i<itemsinCart.length;i++) {
            let item = itemsinCart[i];
              html+=`<div class="row cart-item">
                        <div class="col span-3-of-12"><img src="${itemsinCart[i].imageURL}"></div>
                        <div class="col span-9-of-12">
                          <div class="label"> ${itemsinCart[i].name}</div>
                            <div class="row">
                              <div class="col span 1-of-2 qty-ctr paddingTop10">
                                  <span class="dot id-${item.id}" id=${item.id} onclick="update(event.target,true)">+</span>
                                  <span class="item-price" id="item-price-${item.id}">${itemsinCart[i].qty}</span>
                                  <span class="dot  id-${item.id}" onclick="update(event.target,false)">-</span>
                                  <span>x</span>
                                  <span>Rs.${itemsinCart[i].price}</span>
                              </div>
                              <div class="col span-1-of-2 price-ctr" id="item-total-${item.id}">Rs.${itemsinCart[i].price*itemsinCart[i].qty}
                              </div>
                            </div>
                        </div>
                      </div>`;
           }
           document.getElementsByClassName("cart-box")[0].innerHTML =html;
        }

        function setCount(){
          document.getElementsByClassName("cartNumber")[1].innerHTML=`${itemCount} items` ;
               document.getElementsByClassName("cartNumber")[0].innerHTML=`${itemCount} items` ;
        }

        function closeCart(){
          document.getElementsByClassName("parent-overlay")[0].style.display ='none';
        }
 
        return {
            showSlides: showSlides,
            plusSlides: plusSlides,
            currentSlide: currentSlide
        };
 
})();
*/

function selectCategory(id){
  categoryId = id;
  let prevUrl =window.location.href.split("/");
  let prevId = prevUrl[prevUrl.length -1];
  let diffUrl = categoryId !== prevId;
  window.location.href = diffUrl? `/products/${id}`:'/products';

}

function buy(id) {
 const url = `http://localhost:5000/addToCart`;
 console.log(id);
  fetch(url, {
  method: 'POST',
   headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  body: JSON.stringify({'id':id}),
  }).then(function(response) {
    if(response.status === 200) {
      itemCount=itemCount+1;
      setCount();
      const url = window.location.origin + "/updateCart";
        fetch(url, {
        method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({'cartCount':itemCount}),
        }).then((resp)=>{
          if(!itemList.length){
             itemList.push({'qty':1,'id':id});
           } else {
            let x = itemList.findIndex(x=>x.id == id)
            if(x !== -1){
              itemList[x].qty+=1
            }else {
              itemList.push({'qty':1,'id':id});
            }
           }
           cartUpdated = true;
           itemsinCart =[];
           
          localStorage.setItem("itemList",JSON.stringify(itemList));
        })


      
    }
  });
 
}

function update(event,flag){
  let id =event.classList[1].split("-")[1]
  const index =itemsinCart.findIndex(item=>item.id ==id);
  itemsinCart[index].qty=flag?itemsinCart[index].qty+1:itemsinCart[index].qty-1;
  itemCount= flag?itemCount+1:itemCount-1;
  setCount();
  document.getElementById(`item-price-${id}`).innerHTML = itemsinCart[index].qty;
  document.getElementById(`item-total-${id}`).innerHTML = `Rs.${itemsinCart[index].qty* itemsinCart[index].price}`;
  if( itemsinCart[index].qty === 0){
    itemsinCart.splice(index,1);
  }
  renderCart(itemsinCart);
  calcSum();
}

function calcSum(){
let totalprice = itemsinCart.reduce((sum,x)=>{
    sum = sum+x.qty*x.price;
    return sum;    
},0)
 document.getElementById(`totalprice`).innerHTML = `Rs.${totalprice}&nbsp;&nbsp;>`;

}
function showCart(){
  if(cartUpdated){

    let itemList =JSON.parse(localStorage.getItem("itemList"));
   let products =JSON.parse(localStorage.getItem("products"));
   itemList.forEach(item=>{
    let product =products.find(product=>product.id == item.id);
      product.qty = item.qty;
    itemsinCart.push(product);
   });
   let html='';
   console.log(itemsinCart);
   for(let i=0;i<itemsinCart.length;i++) {
    let item = itemsinCart[i];
      html+=`<div class="row cart-item">
                <div class="col span-3-of-12"><img src="${itemsinCart[i].imageURL}"></div>
                <div class="col span-9-of-12">
                  <div class="label"> ${itemsinCart[i].name}</div>
                    <div class="row">
                      <div class="col span 1-of-2 qty-ctr paddingTop10">
                          <span class="dot id-${item.id}" id=${item.id} onclick="update(event.target,true)">+</span>
                          <span class="item-price" id="item-price-${item.id}">${itemsinCart[i].qty}</span>
                          <span class="dot  id-${item.id}" onclick="update(event.target,false)">-</span>
                          <span>x</span>
                          <span>Rs.${itemsinCart[i].price}</span>
                      </div>
                      <div class="col span-1-of-2 price-ctr" id="item-total-${item.id}">Rs.${itemsinCart[i].price*itemsinCart[i].qty}
                      </div>
                    </div>
                </div>
              </div>`;
   }
   document.getElementsByClassName("cart-box")[0].innerHTML =html;
   calcSum();  
  }
   document.getElementsByClassName("parent-overlay")[0].style.display ='block';
   cartUpdated = false; 

}
function renderCart(itemsinCart){
  let html ='';
  for(let i=0;i<itemsinCart.length;i++) {
    let item = itemsinCart[i];
      html+=`<div class="row cart-item">
                <div class="col span-3-of-12"><img src="${itemsinCart[i].imageURL}"></div>
                <div class="col span-9-of-12">
                  <div class="label"> ${itemsinCart[i].name}</div>
                    <div class="row">
                      <div class="col span 1-of-2 qty-ctr paddingTop10">
                          <span class="dot id-${item.id}" id=${item.id} onclick="update(event.target,true)">+</span>
                          <span class="item-price" id="item-price-${item.id}">${itemsinCart[i].qty}</span>
                          <span class="dot  id-${item.id}" onclick="update(event.target,false)">-</span>
                          <span>x</span>
                          <span>Rs.${itemsinCart[i].price}</span>
                      </div>
                      <div class="col span-1-of-2 price-ctr" id="item-total-${item.id}">Rs.${itemsinCart[i].price*itemsinCart[i].qty}
                      </div>
                    </div>
                </div>
              </div>`;
   }
   document.getElementsByClassName("cart-box")[0].innerHTML =html;
}

function setCount(){
  document.getElementsByClassName("cartNumber")[1].innerHTML=`${itemCount} items` ;
       document.getElementsByClassName("cartNumber")[0].innerHTML=`${itemCount} items` ;
}

function closeCart(){
  document.getElementsByClassName("parent-overlay")[0].style.display ='none';
}
