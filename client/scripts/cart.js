window.addEventListener("DOMContentLoaded", createCart);
window.addEventListener("DOMContentLoaded", displayItems);

function createCart() {
  let cart = [];
  const products = JSON.parse(localStorage.getItem("cart"));

  if (!products) {
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    document.getElementById(
      "total_count"
    ).innerHTML = `${products.length} items)`;
  }
}

function displayItems() {
  const products = JSON.parse(localStorage.getItem("cart"));

  if (products.length) {
    document.getElementById(
      "number_Products"
    ).innerHTML = `My Cart (${products.length} items)`;

    for (let i = 0; i < products.length; i++) {
      let productDiv = document.createElement("div");
      productDiv.setAttribute("class", "product_container");
      productDiv.setAttribute("id",`${products[i].id}_item`)

      let itemContainer = document.createElement("div");
      itemContainer.setAttribute("class", "item_container");

      let prodImg = document.createElement("img");
      prodImg.setAttribute("src", products[i].imgURL);
      prodImg.setAttribute("alt",products[i].name);
      prodImg.setAttribute("height",'100%');
      prodImg.setAttribute("width",'auto');

      let itemDetail = document.createElement("div");
      itemDetail.setAttribute("class", "item_detail");

      let itemName = document.createElement("h4");
      itemName.setAttribute("class", "item_name");
      itemName.innerHTML = products[i].name;

      let quantityDiv = document.createElement("div");
      quantityDiv.setAttribute("class", "quantity_container");

      let buttonDecrease = document.createElement("button");
      buttonDecrease.setAttribute("class", "action_button");
      buttonDecrease.setAttribute("id", `${products[i].id}_-`);
      buttonDecrease.innerHTML = "-";

      let spanQuantity = document.createElement("span");
      spanQuantity.setAttribute("class", "quantity_desc");
      spanQuantity.setAttribute("id", products[i].id);
      spanQuantity.innerHTML = products[i].quantity;

      let buttonIncrease = document.createElement("button");
      buttonIncrease.setAttribute("class", "action_button");
      buttonIncrease.setAttribute("id", `${products[i].id}_+`);
      buttonIncrease.innerHTML = "+";

      let spanMultiply = document.createElement("span");
      spanMultiply.setAttribute("class", "quantity_desc");
      spanMultiply.innerHTML = "✕";

      let spanPrice = document.createElement("span");
      spanPrice.setAttribute("class", "quantity_desc");
      spanPrice.setAttribute("id",`${products[i].id}_price`);
      spanPrice.innerHTML = products[i].price;

      let totalPriceDiv = document.createElement("div");
      totalPriceDiv.setAttribute("class", "total_price");
      totalPriceDiv.setAttribute("id", `${products[i].id}_total`);
      totalPriceDiv.innerHTML = `Rs.${products[i].totalPrice}`;

      quantityDiv.append(buttonDecrease);
      quantityDiv.append(spanQuantity);
      quantityDiv.append(buttonIncrease);
      quantityDiv.append(spanMultiply);
      quantityDiv.append(spanPrice);
      itemDetail.append(itemName);
      itemDetail.append(quantityDiv);
      itemContainer.append(prodImg);
      itemContainer.append(itemDetail);
      productDiv.append(itemContainer);
      productDiv.append(totalPriceDiv);

      document.querySelector("#product_list").appendChild(productDiv);
    }
    let totalPrice = products.reduce((accumulator, item) => {
        return accumulator + item.totalPrice;
      }, 0);

    document.getElementById("cart_total").innerHTML = `Rs. ${totalPrice} >`;
  }
  else{
    document.getElementById(
        "number_Products"
      ).innerHTML = `My Cart (0 items)`;

      let noItem_div = document.createElement("div");
      noItem_div.setAttribute("class","noItem_div");

      let noItemHeading = document.createElement("h4");
      noItemHeading.setAttribute("class", "noItemHeading");
      noItemHeading.innerHTML = 'No items in your cart';

      let noItemText = document.createElement("span");
      noItemText.setAttribute("class", "noItemText");
      noItemText.innerHTML = 'Your favorite items are just a click away';

      let checkOutButton = document.createElement("button");
      checkOutButton.setAttribute("class", "checkout_button");
      checkOutButton.setAttribute("style", "justify-content:center;");
      checkOutButton.innerHTML = 'Start Shopping';

      noItem_div.append(noItemHeading)
      noItem_div.append(noItemText)

      document.querySelector("#product_list").appendChild(noItem_div);
      document.getElementById("checkout_div").innerHTML = '';
      document.querySelector("#checkout_div").appendChild(checkOutButton);
  }
}

function itemAction(e){
    if (e.target && e.target.nodeName == "BUTTON") {
        const arr = e.target.id.split('_');
        const action = arr[1];
        const id = arr[0];
        const cartTotal = parseInt(document.getElementById("cart_total").innerHTML.split(' ')[1]);
        let cart = JSON.parse(localStorage.getItem("cart"));

        if(action === '+'){
            let prev = parseInt(document.getElementById(id).innerHTML);
            const price = parseInt(document.getElementById(`${id}_price`).innerHTML);
            cart = cart.map(item=>{
                if(item.id === id){
                  item.quantity += 1;
                  item.totalPrice += item.price;
                }
                return item;
              });

            prev = prev + 1;

            document.getElementById(id).innerHTML = prev;
            document.getElementById(`${id}_total`).innerHTML = `Rs. ${prev * price}`;
            document.getElementById("cart_total").innerHTML = `Rs. ${cartTotal + price} >`;
        }
        if(action === '-'){
            let prev = parseInt(document.getElementById(id).innerHTML);
            const price = parseInt(document.getElementById(`${id}_price`).innerHTML);

            if(prev > 1){
                cart = cart.map(item=>{
                    if(item.id === id){
                      item.quantity -= 1;
                      item.totalPrice -= item.price;
                    }
                    return item;
                  });

                prev = prev - 1;
    
                document.getElementById(id).innerHTML = prev;
                document.getElementById(`${id}_total`).innerHTML = `Rs. ${prev * price}`;
                document.getElementById("cart_total").innerHTML = `Rs. ${cartTotal - price} >`;
            }
            else{
                cart = cart.filter(product=> product.id !== id);
               
                let item = document.getElementById(`${id}_item`);
                item.parentElement.removeChild(item);

                document.getElementById("cart_total").innerHTML = `Rs. ${cartTotal - price} >`;
                document.getElementById("number_Products").innerHTML = `My Cart (${cart.length} items)`;
                document.getElementById("total_count").innerHTML = `${cart.length} items)`;
                
            }
        }
        localStorage.setItem("cart", JSON.stringify(cart));
      }
}

document.getElementById('product_list').addEventListener("click",itemAction);
