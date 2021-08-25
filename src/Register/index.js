import register from './index.hbs';

const getRegisterPage = () => {
    let homeSelector = document.querySelector('.home-data');
    homeSelector.innerHTML = register();
    document.getElementById("firstName").focus();
}
document.getElementById("register").addEventListener("click", getRegisterPage);