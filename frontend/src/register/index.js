import _ from 'lodash';
import header from '../components/header';
import footer from '../components/footer';
import './index.scss'

function registerUser(event){
    event.preventDefault();
    let validationCheck = true;
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email= document.getElementById('email').value
    let password= document.getElementById('password').value
    let confirmPassword = document.getElementById('confirm-password').value
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const passReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
    
    let firstNameDiv = document.getElementById('alert-first-name')
    firstNameDiv.style.display = "none";

    let lastNameDiv = document.getElementById('alert-last-name')
    lastNameDiv.style.display = "none";

    let emailDiv=document.getElementById('alert-email')
    emailDiv.style.display = "none";

    let passwordDiv = document.getElementById('alert-password')
    passwordDiv.style.display = "none";
    
    let confirmDiv = document.getElementById('alert-confirm')
    confirmDiv.style.display = "none";

    if(firstName == "" || firstName == undefined){
    firstNameDiv.style.display = "block";
    firstNameDiv.innerText = "Please Enter Your Name"
    validationCheck = false;
    }
    if(lastName == "" || lastName == undefined){
        lastNameDiv.style.display = "block";
        lastNameDiv.innerText = "Please Enter Your Last Name "
        validationCheck = false;
    }
        if(email == '' || reg.test(email) == false || email == undefined){
            emailDiv.style.display = "block";
            emailDiv.innerText = "Pleae Enter Valid Email Id"
            validationCheck = false;
        }
    if(password == "" || password == undefined || password.length < 6 || passReg.test(password)== false){
        passwordDiv.style.display = "block";
        passwordDiv.innerHTML = "Please Enter Valid Password"
        validationCheck = false;
    }
    if(confirmPassword == "" || confirmPassword != password || confirmPassword == undefined){
        confirmDiv.style.display = "block";
        confirmDiv.innerText = "Password doesn't match"
        validationCheck = false;
    }
    if(validationCheck == true){
        location.href = "login.html";
    }
    
}

function buildform(){
    const form = document.createElement('form');
    form.classList.add('register__formcontainer__form')
    form.onsubmit = (event) => registerUser(event)
    form.innerHTML = `
            <div class="register__formcontainer__form__inputcontainer">
                <label for="first-name" class="register__formcontainer__form__inputcontainer__label">First Name</label>
                <input type="text" id="first-name" placeholder="First Name" class="register__formcontainer__form__inputcontainer__input"/>
                <div id="alert-first-name" class="register__formcontainer__form__inputcontainer__error"></div>
            </div>
            
            <div class="register__formcontainer__form__inputcontainer">
                <label for="last-name" class="register__formcontainer__form__inputcontainer__label">Last Name</label>
                <input type="text" id="last-name" placeholder="Last Name" class="register__formcontainer__form__inputcontainer__input"/>
                <div id="alert-last-name" class="register__formcontainer__form__inputcontainer__error"></div>
            </div>
            
            <div class="register__formcontainer__form__inputcontainer">
                <label for="email" class="register__formcontainer__form__inputcontainer__label">Email</label>
                <input type="email" id="email" placeholder="Email" class="register__formcontainer__form__inputcontainer__input"/>
                <div id="alert-email" class="register__formcontainer__form__inputcontainer__error"></div>
            </div>
            
            <div class="register__formcontainer__form__inputcontainer">
                <label for="password" class="register__formcontainer__form__inputcontainer__label">Password</label>
                <input type="password" id="password" placeholder="Password" class="register__formcontainer__form__inputcontainer__input"/>
                <div id="alert-password" class="register__formcontainer__form__inputcontainer__error"></div>
            </div>
            
            <div class="register__formcontainer__form__inputcontainer">
                <label for="confirm-password" class="register__formcontainer__form__inputcontainer__label">Confirm Password</label>
                <input type="password" id="confirm-password" placeholder="Confirm Password" class="register__formcontainer__form__inputcontainer__input"/>
                <div id="alert-confirm" class="register__formcontainer__form__inputcontainer__error"></div>
            </div>
            
            <button class="register__formcontainer__form__submit">Signup</button>
    `
    setTimeout(() => document.getElementById('registerform').appendChild(form))
}

function body(){
    buildform()
    return `<main id="main">
                <div class="register">
                    <div class="register__content">
                        <h1 class="register__content__heading">
                            Sign Up
                        </h1>
                        <p class="register__content__subheading">
                            We do not share your personal details with anyone.
                        </p>
                    </div>
                    <div class="register__formcontainer" id="registerform"></div>
                </div>                
            </main>`
}

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = header() + body() + footer();
  
    return element;
  }
  
  document.body.appendChild(component());