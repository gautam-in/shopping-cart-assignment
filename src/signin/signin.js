import login from './signin.hbs';

const getLoginPage = () => {
    let homeSection = document.querySelector('.home-content');
    homeSection.innerHTML = login();
    let getEmail = document.getElementById("email");
    getEmail.value = 'test@test.com';
    getEmail.focus();
}
document.getElementById("signIn").addEventListener("click", getLoginPage);