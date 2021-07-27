import register from './register.hbs';

const getRegisterPage = () => {
    let homeSection = document.querySelector('.home-content');
    homeSection.innerHTML = register();
    document.getElementById("firstName").focus();
}
document.getElementById("register").addEventListener("click", getRegisterPage);