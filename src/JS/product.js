// side Menu
let count=0;

// import {CartContent} from "./cart.js"
// import {DisplayAddedToCart} from "./Displaycart.js"



function HomepageCategoriesContent() {
    return fetch("../server/categories/index.get.json")
      .then((result) => {
        return result.json();
      })
      .catch((err) => console.log(error));
  }
async function NavContent() {
    let Response = await HomepageCategoriesContent();
  
    console.log(Response);
    Response.sort(function(a, b) { 
      return a.order - b.order  ||  a.name.localeCompare(b.name);
    });
    console.log(Response);
    for (let res of Response) {
     DisplayNav(res);
    }
  }
  NavContent();
  function DisplayNav(res){
      let NavMenu=document.querySelector(".nav-menu");
      
    //   LINK
      let NavItem=document.createElement("li");
      NavItem.setAttribute('class','nav-item')
    //   ANCHOR
      let NavLink=document.createElement("a");
      NavLink.setAttribute('class','nav-link');
      NavLink.innerText=res.name;
      NavLink.setAttribute('href',`#${res.id}`);
      console.log(NavLink.setAttribute('id',`#${res.id}`));
      NavItem.append(NavLink);
      NavMenu.append(NavItem);
      
  }
//  Main section
 function ProductContent() {
    return fetch("../server/products/index.get.json")
      .then((result) => {
        return result.json();
      })
      .catch((err) => console.log(error));
  }
  async function ProductDisplay() {
    let Response = await  ProductContent();
  
    console.log(Response);
  
    console.log(Response);
    for (let res of Response) {
     DisplayProcducts(res);
    }
  }
  ProductDisplay()
  function DisplayProcducts(res)
  {
    res.inCart=0;
    console.log(res);
    let ProductsContainer=  document.querySelector(".products-container");
    // CARD
    let Card=document.createElement("div");
    Card.setAttribute('class','card');
    Card.setAttribute('id',`${res.category}`);

    // heading
    let heading=document.createElement("h3");
    heading.setAttribute('class','card-heading');
    heading.innerText=res.name;
    // IMG
    // let imgUrl=res.imageUrl;
    // console.log(imgUrl);
    let image=document.createElement("img");
    image.setAttribute('class','card-img');
    image.setAttribute('src',`..${res.imageURL}`);
    image.setAttribute('alt',`${res.name}`);
    image.setAttribute('width',"100%");
    image.setAttribute('height',"50%");
    // paragraph
    let para=document.createElement("p");
    para.setAttribute('class','description');

    para.innerText=res.description;
    //price wrapper
    let PriceWrapper=document.createElement("div");
    PriceWrapper.setAttribute('class','price');
    //price tag
    let PriceTag=document.createElement("p");
    PriceTag.setAttribute('class','price-tag');
    PriceTag.innerText="MRP Rs."+res.price;
    // button
    let Pricebutton=document.createElement("button");
    Pricebutton.setAttribute('class','price-button');
    Pricebutton.setAttribute('style','cursor:pointer');
    Pricebutton.innerText="Buy Now";
    Pricebutton.addEventListener('click',()=>{ 
      CartNumbers();
      // DisplayAddedToCart();
      GetCartContent(res);
      TotalCost(res)
    }
      )
   
   
    // Apending
    PriceWrapper.append(PriceTag,Pricebutton);
    Card.append(heading,image,para,PriceWrapper);
    ProductsContainer.append(Card)
    
  }
  
    var CartItem=[];
    function OnLoadCartNumbers()
    {
      let ProductNumbers=localStorage.getItem('CartNumbers');
      if(ProductNumbers)
    {
      document.querySelector("#count").textContent=ProductNumbers+" items";


    }

    }
  function CartNumbers()
  {
    let ProductNumbers=localStorage.getItem('CartNumbers');
    ProductNumbers=parseInt(ProductNumbers);
    if(ProductNumbers)
    {
      localStorage.setItem('CartNumbers',ProductNumbers+1);
      document.querySelector("#count").textContent=ProductNumbers+1+" items";


    }else{
      localStorage.setItem('CartNumbers',1);
      document.querySelector("#count").textContent=1+" items";


    }

  }
  function GetCartContent(res)
  {
    let carItems=localStorage.getItem('ProductsInCart');
    carItems=JSON.parse(carItems);
    if(carItems !=null)
    {
      if(carItems[res.id]==undefined){
        carItems={
          ...carItems,
          [res.id]:res 
        }
      }
      carItems[res.id].inCart+=1;
    }else{
      res.inCart=1;
      carItems={
        [res.id]:res
      };
    }

    localStorage.setItem('ProductsInCart',JSON.stringify(carItems));

  }
  function TotalCost(res){
    let total=localStorage.getItem('totalCost');
    if(total!=null){
      console.log(total);
      total=parseInt(total);
      localStorage.setItem('totalCost',total+res.price);
      document.querySelector("#totalprice").textContent="Rs"+total+res.price;


    }else{
      localStorage.setItem('totalCost',res.price);
      document.querySelector("#totalprice").textContent="Rs"+total;


    }

  }
 

 
  function displayCart(){
    let cartMembers=localStorage.getItem('ProductsInCart');
    cartMembers=JSON.parse(cartMembers);
    var CartContainer=document.querySelector(".Cartcontainer");
    if(cartMembers && CartContainer ){
      CartContainer.innerHTML=" "
      Object.values(cartMembers).map(res=>{
        let itemnubmer=document.querySelector("#countnum");
  itemnubmer.innerText=" ("+Object.keys(cartMembers).length +" items)";
     Display(res)
       

      })
    }
  }
 function Increment(res){
   console.log(res)
   let cartMembers=localStorage.getItem('ProductsInCart');
   cartMembers=JSON.parse(cartMembers);
   cartMembers[res.id].inCart+=1;
   

  // res.inCart+=1;
  //  var imts=document.querySelector(".itemcount");
  //  imts.innerText=res.inCart;

 }

  function Display(res)
  {
       
        var CartContainer=document.querySelector(".Cartcontainer");
        var itemrow=document.createElement("div");
        itemrow.setAttribute('class',`item-row`);
        //img
        var image=document.createElement("img");
        image.setAttribute('class','item-image')
        image.setAttribute('src',`..${res.imageURL}`);
        //item-detail
        var itemdetail=document.createElement("div");
        itemdetail.setAttribute('class',`item-detail`);
        //item-heading
        var itemheading=document.createElement("div");
        itemheading.setAttribute('class',`item-heading`);
        //h3
       var h3=document.createElement("h3");
       h3.setAttribute('class',`item-name`);
       h3.innerText=res.name
       //item-quantities
       var itemquantities=document.createElement("div");
       itemquantities.setAttribute('class',`item-quantities`);
       //item-numbers
       var itemnumbers=document.createElement("div");
       itemnumbers.setAttribute('class',`item-numbers`);
       //decrement
        var decrement=document.createElement("button");
       decrement.setAttribute('class',`decreament`);
       decrement.innerText="-";
       decrement.addEventListener('click',()=>{decreamentCall(res)})

       //itemcount
       var itemcount=document.createElement("span");
       itemcount.setAttribute('class',`itemcount`);
       itemcount.innerText=res.inCart;
       //increment
        var increment=document.createElement("button");
       increment.setAttribute('class',`increament`);
       increment.innerText="+";
       increment.addEventListener('click',()=>{IncreamentCall(res)});
       //spanx
       var spanx=document.createElement("span");
       spanx.setAttribute('class',`spanx`);
       spanx.innerText="x";
       //price
       var price=document.createElement("span");
       price.setAttribute('class',`price`);
       price.innerText=res.price;
       //itemprice
       var itemprice=document.createElement("div");
       itemprice.setAttribute('class',`itemprice`);
       //itemsPrice
       var itemsPrice=document.createElement("span");
      itemsPrice.setAttribute('class',`itemsPrice`);
      itemsPrice.setAttribute('style',"font-size:1.3rem");

       itemsPrice.innerText="Rs "+res.price * res.inCart;
       //appending
       CartContainer.append(itemrow);
       itemrow.append(image,itemdetail);
       itemdetail.append(itemheading,itemquantities);
       itemheading.append(h3);
       itemquantities.append(itemnumbers);
       itemnumbers.append(decrement,itemcount,increment,spanx,price);
       itemprice.append(itemsPrice);
      itemquantities.append(itemprice);
      let total=localStorage.getItem('totalCost');
    total=parseInt(total);
    document.querySelector("#totalprice").textContent="Rs "+total;

  }
  function IncreamentCall(res){
    let cartMembers=localStorage.getItem('ProductsInCart');
    cartMembers=JSON.parse(cartMembers);
    cartMembers[res.id].inCart+=1;
    localStorage.setItem('ProductsInCart',JSON.stringify(cartMembers));
    let total=localStorage.getItem('totalCost');
    total=parseInt(total);
    document.querySelector("#totalprice").textContent=total+res.price

    localStorage.setItem('totalCost',total+res.price);
    console.log(total+res.price);

    Display(res);
    OnLoadCartNumbers();
    CartNumbers();
    displayCart();
}
function decreamentCall(res){
  let cartMembers=localStorage.getItem('ProductsInCart');
  cartMembers=JSON.parse(cartMembers);
  if(cartMembers[res.id].inCart>1){
    cartMembers[res.id].inCart-=1;
  }
  else{
    delete cartMembers[res.id]

  }
  let ProductNumbers=localStorage.getItem('CartNumbers');
    ProductNumbers=parseInt(ProductNumbers);
    document.querySelector("#count").textContent=ProductNumbers-1+" items";
    localStorage.setItem('CartNumbers',ProductNumbers-1);
    let total=localStorage.getItem('totalCost');
    total=parseInt(total);
    localStorage.setItem('totalCost',total-res.price);
    document.querySelector("#totalprice").textContent="Rs"+total-res.price;


  
  localStorage.setItem('ProductsInCart',JSON.stringify(cartMembers));
  
  Display(res);
    OnLoadCartNumbers();
    displayCart();

}


  OnLoadCartNumbers();
  displayCart();
  export{CartNumbers,OnLoadCartNumbers}