function loginUser(event){
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if(email && password){
        let errorBlock = document.getElementById('error__block');
        if(password < 6) errorBlock.innerText = 'Password should be more than 6 letters';
        else if(password.search(/[a-z]/i) < 0) errorBlock.innerText = 'Password should contain at least one letter';
        else if(password.search(/[0-9]/) < 0) errorBlock.innerText = 'Password should contain at least one digit';
        else{
                localStorage.setItem('auth', true);
                window.location.href="/shopping-cart-assignment/client/pages/products/products.html?";        
        }
        errorBlock.style.display = 'block'  
    }else{
        let errorBlock = document.getElementById('error__block');
        errorBlock.innerText = 'All fields are required';
        errorBlock.style.display = 'block'
    }
}