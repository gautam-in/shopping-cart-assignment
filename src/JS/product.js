// side Menu
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
    Pricebutton.innerText="Buy Now";
    Pricebutton.addEventListener('click',()=>{ CartContent(res);})
   
   
    // Apending
    PriceWrapper.append(PriceTag,Pricebutton);
    Card.append(heading,image,para,PriceWrapper);
    ProductsContainer.append(Card)

  }
 var count=0;
  var CartItem=[];
 function CartContent(response)
 {
   CartItem.push(response);
   console.log(CartItem);
   return CartItem;
   
 }
 export{CartContent}
