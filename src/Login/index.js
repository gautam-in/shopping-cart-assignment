import login from './index.hbs';

const getLoginPage = () => {
    let homeSelector = document.querySelector('.home-data');
    homeSelector.innerHTML = login();
    let getEmail = document.getElementById("email");
    getEmail.value = 'saumya@test.com';
    getEmail.focus();
}
document.getElementById("login").addEventListener("click", getLoginPage);