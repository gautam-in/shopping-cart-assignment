var cart = document.getElementsByTagName("svg");
var button = document.getElementsByTagName("button");


// for(var but of button){
//     let count = 0;
//     but.addEventListener("click", (e)=>{
//         count++;
//         console.log('add to cart clicked', count++)
//         document.getElementById("cart-item").innerHTML = `${count} item`


//         var add = Number(cart.getAttribute("data-count") || 0);
//         cart.setAttribute("data-count", add +1)
//         cart.classList.add("zero")
//     })
// }

//Adding items to the cart

let count = 0;
function fun(){
    count+1;
    console.log('add to cart clicked', count++)
    document.getElementById("cart-item").innerHTML = `${count} item`
}


