var stdEmail = "test@gmail.com";
var stdPassword = "test@1234"

$(document).ready(function () {
$('.button-modify').on("click", function (e) {
    e.preventDefault();
     var email= $('#email').val()
     var password= $('#password').val()
     var validationCheck = true;
     document.getElementById('email-alert').style.display = "none";
     document.getElementById('password-alert').style.display = "none";
     if(email != stdEmail){
         document.getElementById('email-alert').style.display = "block";
         validationCheck = false;
     }
     if(password != stdPassword){
        document.getElementById('password-alert').style.display = "block";
        validationCheck = false;
    }
    if(validationCheck == true){
        location.href = "category.html";
    }

  });
})