function toggleCart(){
    var el = document.getElementsByClassName('cart-container');
    if(el[0].style.visibility == 'hidden'){
        el[0].style.visibility = 'visible';
        el[0].style.opacity = '1';
    }else{
        el[0].style.visibility = 'hidden';
    }
    
    
}