let stdEmail = "test@gmail.com";
let stdPassword = "test@1234"


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