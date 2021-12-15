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

    }else{
      localStorage.setItem('totalCost',res.price);

    }

  }
  function DisplayCartContent(res)
 {
  let CartContainer=document.querySelector(".Cartcontainer");

    //    First Div Cart Heading
      let CartHeading=document.createElement("div");
      CartHeading.setAttribute('class','cart-heading-div');
    //   Heading inside Div
    let Heading=document.createElement("h3");
    Heading.setAttribute('class','heading');
    Heading.innerText="My Cart"
    // Span
    let span=document.createElement("span");
    span.setAttribute('class','headingSpan');
    span.innerText="(items)";
    // Item Row
    let ItemRow=document.createElement("div");
    ItemRow.setAttribute('class','item-row');
    // Image
    let Image=document.createElement("img");
    Image.setAttribute('class','ite-image');
    Image.setAttribute('src',`..${res.imageURL}`);
    Image.setAttribute('width','100%');
    Image.setAttribute('height','100%');
    // Item-detail
    let itemDetail=document.createElement("div");
    itemDetail.setAttribute('class','item-detail');
    // Item heading
    let itemHeading=document.createElement("div");
    itemHeading.setAttribute('class','item-heading');
    
    // Itemname
    let ItemName=document.createElement("h3");
    ItemName.setAttribute('class','item-name');
    ItemName.innerText=res.name;

    // quatities
    let ItemQuantities=document.createElement("div");
    ItemQuantities.setAttribute('class','item-quantities');
    // increament
    let Increament=document.createElement("button");
    Increament.setAttribute('class','increament');
    Increament.setAttribute('value','+');
    // span for number
    let ItemCount =document.createElement("span");
    ItemCount.setAttribute('class','itemcount');
     // decreament
     let decreament=document.createElement("button");
     Increament.setAttribute('value','-');
      // span
    let spanx=document.createElement("span");
    spanx.setAttribute('class','spanx');
     // price
     let price=document.createElement("span");
     price.setAttribute('class','price');
//   appending
  
Heading.append(span);
// console.log(CartContainer);

CartHeading.append(Heading);
CartContainer.append(ItemRow,CartHeading);

ItemRow.append(Image);
itemHeading.append(ItemName);
itemDetail.append(itemHeading);
ItemQuantities.append(Increament);
ItemQuantities.append(ItemCount);
ItemQuantities.append(decreament);
ItemQuantities.append(spanx);
ItemQuantities.append(price);
itemHeading.append(ItemQuantities);
ItemRow.append(itemHeading,itemDetail);

 }
  function displayCart(){
    let cartMembers=localStorage.getItem('ProductsInCart');
    cartMembers=JSON.parse(cartMembers);
    var CartContainer=document.querySelector(".Cartcontainer");
    if(cartMembers && CartContainer ){
      CartContainer.innerHTML=" "
      Object.values(cartMembers).map(res=>{
        DisplayCartContent(res)
      })
    }
  }
  OnLoadCartNumbers();
  displayCart();
  export{CartNumbers,OnLoadCartNumbers}