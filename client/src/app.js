var cart = document.getElementsByTagName("svg");
var button = document.getElementsByTagName("button");


//Adding items to the cart

let count = 0;
function fun(){
    count+1;
    console.log('add to cart clicked', count++)
    document.getElementById("cart-item").innerHTML = `${count} item`
}


