function loginUser(event){
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if(email && password){
        localStorage.setItem('auth', true);
        window.location.href="/shopping-cart-assignment/client/pages/products/products.html?";
    }else{
        let errorBlock = document.getElementById('error__block');
        errorBlock.innerText = 'All fields are required';
        errorBlock.style.display = 'block'
    }
}