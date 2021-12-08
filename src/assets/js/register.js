
document.querySelector('.signin-action-form').addEventListener('submit',function(e){
    e.preventDefault();
    var Fname = document.querySelector('#firstName').value;
    var Lname = document.querySelector('#lastName').value;
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    var confirmPwd = document.querySelector('#confirmPwd').value; 
    var span = document.querySelector('#showerror');   

    if(password != confirmPwd){
            span.style.color = "red";
            span.innerText = "Password not match. Please enter valid password !";
    }else{
        if(window.localStorage){
            var Array = [];
            var localStorageData =  localStorage.getItem('formdata');
            Array = JSON.parse(localStorageData) ? JSON.parse(localStorageData): [];

            var checkEmail = JSON.parse(localStorageData) ? JSON.parse(localStorageData).filter((e)=>e.email == email) : [];
            if(checkEmail.length > 0){
                span.style.color = "red";
                span.innerText = "Email id is already Registered...";
            }else{                
                span.innerText = "";
                var FormData = {
                    fname : Fname,
                    lname :Lname,
                    email :email,
                    password: password,
                    confirmPwd :confirmPwd
                }
                Array.push(FormData);         
                localStorage.setItem('formdata',JSON.stringify(Array));
                Swal.fire(
                    'Data Insert Successfully...!',
                    '',
                    'success'
                ).then((e) => window.location.href  = "signin.html");

            }  
        }
    } 
    
})




document.querySelector('#loginform').addEventListener('submit',function(e){
    e.preventDefault();
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    var span = document.querySelector('#showerror'); 

        if(window.localStorage){
            var localStorageData =  localStorage.getItem('formdata');
            var checkEmail = JSON.parse(localStorageData) ? JSON.parse(localStorageData).filter((e)=>e.email == email) : [];
            if(checkEmail.length ==1){
                


                Swal.fire(
                    'Login Successfully...!',
                    '',
                    'success'
                ).then((e) => window.location.href  = "index.html");

            }else{    
                span.style.color = "red";
                span.innerText = "Invalid Login details.";     
            }  
        }
    
})



