//const cart = [1];
console.log("cart",x);
cart = [1,2,3,4,5];
let cartHeaderElement = document.querySelector('#cartItemsCount');

let cartFooterWithItems = document.querySelector('.cartFooterWithItems');
let cartFooterWithoutItems = document.querySelector('.cartFooterWithoutItems');

let cartContentWithItems = document.querySelector('.cartContentWithItems');
let cartContentWithoutItems = document.querySelector('.cartContentWithoutItems');

function cartSetUp() {
    console.log(cartFooterWithoutItems);
    if(cart.length === 0) {
       cartHeaderElement.textContent = '';
       cartContentWithItems.classList.add('d-none');
       cartFooterWithItems.classList.add('d-none');
       cartContentWithoutItems.classList.remove('d-none');
       cartFooterWithoutItems.classList.remove('d-none');
    }else {
      cartHeaderElement.textContent = `(${cart.length} items)`;
      cartContentWithoutItems.classList.add('d-none');
      cartFooterWithoutItems.classList.add('d-none');
      cartContentWithItems.classList.remove('d-none');
      cartFooterWithItems.classList.remove('d-none');
    }
}

cartSetUp();
