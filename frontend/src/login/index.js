import _ from 'lodash';
import header from '../components/header';
import footer from '../components/footer';
import './index.scss'

function validateUser(event){
    event.preventDefault();
    let validationCheck = true;
    let email= document.getElementById("email").value
     let password= document.getElementById("password").value
    
    // document.getElementById('alert').style.display = "none"
    let div = document.getElementById('alert')
    div.style.display = "none"
    if(email != stdEmail){
        div.style.display = "block"
        //  document.getElementById('alert').style.display = "block";
        div.innerText = "Please Enter valid Email"
        validationCheck = false;
    }
    if(password != stdPassword){
         div.style.display = "block"
        // document.getElementById('alert').style.display = "block";
        div.innerText = "Please Enter valid Email"
        validationCheck = false;
    }
    if(validationCheck == true){
        location.href = "category.html";
    }

}
function buildform(){
    const form = document.createElement('form');
    form.classList.add('login__formcontainer__form')
    form.onsubmit = (event) => validateUser(event)
    form.innerHTML = `
            
            <div class="login__formcontainer__form__inputcontainer">
                <label for="email" class="login__formcontainer__form__inputcontainer__label">Email</label>
                <input type="email" id="email" placeholder="Email" class="login__formcontainer__form__inputcontainer__input"/>
                <div id="alert-email" class="login__formcontainer__form__inputcontainer__error"></div>
            </div>
            
            <div class="login__formcontainer__form__inputcontainer">
                <label for="password" class="login__formcontainer__form__inputcontainer__label">Password</label>
                <input type="password" id="password" placeholder="Password" class="login__formcontainer__form__inputcontainer__input"/>
                <div id="alert-password" class="login__formcontainer__form__inputcontainer__error"></div>
            </div>

            <button class="login__formcontainer__form__submit">Login</button>
    `
    setTimeout(() => document.getElementById('loginform').appendChild(form))
}

function body(){
    buildform()
    return `<main id="main">
                <div class="login">
                    <div class="login__content">
                        <h1 class="login__content__heading">
                            Login
                        </h1>
                        <p class="login__content__subheading">
                            Get access to your Orders. Wishlist and Recommendations
                        </p>
                    </div>
                    <div class="login__formcontainer" id="loginform"></div>
                </div>                
            </main>`
}

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = header() + body() + footer();
  
    return element;
  }
  
  document.body.appendChild(component());