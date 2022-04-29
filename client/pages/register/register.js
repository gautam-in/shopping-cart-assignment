function registerUser(event){
    event.preventDefault();
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('cfmPassword').value;

    if(firstName && lastName && email && password && confirmPassword){
        localStorage.setItem('auth', true);
        window.location.href="/shopping-cart-assignment/client/pages/products/products.html?";
    }else{
        let errorBlock = document.getElementById('error__block');
        errorBlock.innerText = 'All fields are required';
        errorBlock.style.display = 'block'
    }
}