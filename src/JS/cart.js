
var count=0;
  let CartItem=[];
 function CartContent(arr)
 {
   CartItem.push(arr);
   console.log(CartItem);
   for(let res of CartItem){
   DisplayCarContent(res);
   }
   
 }
 function DisplayCarContent(res)
 {
    let CartContainer=document.querySelector(".Cart-Container");

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
console.log(CartContainer);

CartHeading.append(Heading);
CartContainer.append(CartHeading);

ItemRow.append(Image);
itemHeading.append(ItemName)
itemDetail.append(itemHeading);
ItemQuantities.append(Increament);
ItemQuantities.append(ItemCount);
ItemQuantities.append(decreament);
ItemQuantities.append(spanx);
ItemQuantities.append(price);
itemHeading.append(ItemQuantities);
ItemRow.append(itemHeading,itemDetail);









 }
 export{ CartItem,CartContent}
