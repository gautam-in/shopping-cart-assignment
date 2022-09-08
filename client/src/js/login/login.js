import {network} from '../../service/service.js';
(() => {

  //get form controls
  const form = document.getElementById("login-form");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  //validate email id
  const validateEmail = (event) => {
      if(!event.target.value)
        document.getElementById(`${event.target.id}-error`).textContent = 'Required';
      else if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(event.target.value))
        document.getElementById(`${event.target.id}-error`).textContent = 'Please provide valid email Id';
      else 
        document.getElementById(`${event.target.id}-error`).textContent = "";
  };

  //validate password
  const validatePassword = (event) => {
    if (!event.target.value)
        document.getElementById(`${event.target.id}-error`).textContent = "Required";
    else 
        document.getElementById(`${event.target.id}-error`).textContent = "";
  };

  //api call to authenticate to user
  const login = async()=>{
    try {
      const status = await network('/login',{
        method:'POST',
        data:{
            email:email.value,
            password:password.value
        }
      });
      sessionStorage.setItem('userId',status.userId);
      sessionStorage.setItem('isLoggedIn',true);
      alert(status.message);
      location.href = 'index.html';
      
    } catch (error) {
      if(error.message == '401'){
        alert("Failed to Logged In.Please try with different credentials");
      }
    }
    
    //clear form fields
    document.getElementById('email').value='';
    document.getElementById('password').value='';
};

  //validate form controls
  const validateState = (event) => {
    switch (event.target.id) {
      case "email":
        validateEmail(event);
        break;
      case "password":
        validatePassword(event);
        break;
      default:
    }
  };

  //add event listner to form controls
  email.addEventListener("input", ($event) => validateState($event));
  email.addEventListener("blur", ($event) => validateState($event));

  password.addEventListener("input", ($event) => validateState($event));
  password.addEventListener("blur", ($event) => validateState($event));

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    //get error label
    const emailErr = document.getElementById(`${email.id}-error`);
    const passwordErr = document.getElementById(`${password.id}-error`);

    let isFormValid = true;
    
    //checking if email has value
    if(!email.value){
        emailErr.textContent = 'Required';
        isFormValid = false;
    }
    
    //checking email validity
    if(email.value && !(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email.value)){
        emailErr.textContent = 'Please provide valid email Id';
        isFormValid = false;
    }
    
    //checking if password has value
    if(!password.value){
        passwordErr.textContent = 'Required';
        isFormValid = false;
    }
    
    //checking if form is valid
    if(isFormValid){
        //call API to register user
        login();
    }
});
})();
