window.addEventListener('DOMContentLoaded', cartBtnValueDisplay);


function cartBtnValueDisplay(){
    let cartBtn = document.querySelector('.login-cart-btn');
    cartBtnValue = localStorage.length ===0 ? "0 item": localStorage.length +  " items";
    cartBtn.innerHTML = `<i class="fas fa-shopping-cart"></i> ${cartBtnValue}`;
}