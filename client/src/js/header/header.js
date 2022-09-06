(async()=>{

    //watch to update-header emission
    document.addEventListener("update-header", function(e) {
      const pEl = document.querySelector('#total-items');
      pEl.textContent = e.detail + " Items";
    });

    //show or hide cart in header
    const openCloseCart = ()=>{
        const cartContainer = document.querySelector('#cart-container');
        const display = cartContainer.style.display;
        if(display === 'none' || display === ""){
            cartContainer.style.setProperty('display','block','');
        }else{
            cartContainer.style.setProperty('display','none','');
        }
    };

    const cartBtnEl = document.querySelector('.navbar-cart-button');
    cartBtnEl.onclick = ()=> openCloseCart();
})();