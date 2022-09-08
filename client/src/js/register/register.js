import {network} from '../../service/service.js';
(() => {

  //get all form controls
  const form = document.getElementById("register-form");
  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirm_password = document.getElementById("confirm_password");

  //validate inputs has type text
  const validateTextContent = (event) => {
    if (!event.target.value)
      document.getElementById(`${event.target.id}-error`).textContent =
        "Required";
    else document.getElementById(`${event.target.id}-error`).textContent = "";
  };

  //validate inputs has type email
  const validateEmail = (event) => {
      if(!event.target.value)
        document.getElementById(`${event.target.id}-error`).textContent = 'Required';
      else if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(event.target.value))
        document.getElementById(`${event.target.id}-error`).textContent = 'Please provide valid email Id';
      else 
        document.getElementById(`${event.target.id}-error`).textContent = "";
  };

  //validate inputs has type password
  const validatePassword = (event) => {
    if (!event.target.value)
    document.getElementById(`${event.target.id}-error`).textContent = "Required";
    else document.getElementById(`${event.target.id}-error`).textContent = "";
  };

  //validate inputs has type password
  const validateConfirmPassword = (event)=>{
    if (!event.target.value)
        document.getElementById(`${event.target.id}-error`).textContent = "Required";
    else document.getElementById(`${event.target.id}-error`).textContent = "";
  };

  //network call to register a new user
  const registerUser = async()=>{
    const status = await network('/register',{
        method:'POST',
        data:{
            first_name:firstName.value,
            last_name:lastName.value,
            email:email.value,
            password:password.value,
            confirm_password:confirm_password.value
        }
    });

    //checking if response is success.
    if(status){
        alert(status.message);
        window.location.href = 'login.html';
    }
    else{
        alert("failed to create the User");
    }
    
    //clear all form controls
    document.getElementById('firstname').value='';
    document.getElementById('lastname').value='';
    document.getElementById('email').value='';
    document.getElementById('password').value='';
    document.getElementById('confirm_password').value='';
};
  //perform validation
  const validateState = (event) => {
    switch (event.target.id) {
      case "firstname":
      case "lastname":
        validateTextContent(event);
        break;
      case "email":
        validateEmail(event);
        break;
      case "password":
        validatePassword(event);
        break;
      case "confirm_password":
        validateConfirmPassword(event);
        break;
      default:
    }
  };

  //Adding listner on form controls
  firstName.addEventListener("input", ($event) => validateState($event));
  firstName.addEventListener("blur", ($event) => validateState($event));

  lastName.addEventListener("input", ($event) => validateState($event));
  lastName.addEventListener("blur", ($event) => validateState($event));

  email.addEventListener("input", ($event) => validateState($event));
  email.addEventListener("blur", ($event) => validateState($event));

  password.addEventListener("input", ($event) => validateState($event));
  password.addEventListener("blur", ($event) => validateState($event));

  confirm_password.addEventListener("input", ($event) => validateState($event));
  confirm_password.addEventListener("blur", ($event) => validateState($event));

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    //TODO: Need to handle password and confirm password logic
    //get all error label
    const firstNameErr = document.getElementById(`${firstName.id}-error`);
    const lastNameErr = document.getElementById(`${lastName.id}-error`);
    const emailErr = document.getElementById(`${email.id}-error`);
    const passwordErr = document.getElementById(`${password.id}-error`);
    const confirm_passwordErr = document.getElementById(`${confirm_password.id}-error`);

    let isFormValid = true;
    //checking if firstname has value
    if(!firstName.value){
        firstNameErr.textContent = 'Required';
        isFormValid = false;
    }
    
    //checking if lastname has value
    if(!lastName.value){
        lastNameErr.textContent = 'Required';
        isFormValid = false;
    }
    
     //checking if email has value
    if(!email.value){
        emailErr.textContent = 'Required';
        isFormValid = false;
    }
    
    //checking if email is valid
    if(email.value && !(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email.value)){
        emailErr.textContent = 'Please provide valid email Id';
        isFormValid = false;
    }
    
     //checking if password has value
    if(!password.value){
        passwordErr.textContent = 'Required';
        isFormValid = false;
    }
    
    //checking if confirm password has value
    if(!confirm_password.value){
        confirm_passwordErr.textContent = 'Required';
        isFormValid = false;
    }
    if(isFormValid){
        //call API to register user
        registerUser();
    }
});
})();
