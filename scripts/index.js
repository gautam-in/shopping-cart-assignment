
window.onload =  function(){   
    showslides(1)
}
let showslides = pushSlides();

function validate(formName, elementName,errorId){
    let form = document.forms[formName][elementName]
    let errorElement =  document.getElementById(errorId)
    if(!form.checkValidity()){
       errorElement.innerHTML = form.validationMessage
    }else{
        errorElement.innerHTML =''
    }
    if(elementName === 'confirmPassword'){
        if(form.value === document.forms['register']['password'].value){
            errorElement.innerHTML =''
        }else{
            errorElement.innerHTML = 'Passwords Mismatch. Please Enter same password in both field'
    }
        }
}

function addToCart(data){
    data = JSON.parse(data)
    let cartItems = new Array();
    cartItems.push(data)
    const url = 'http://localhost:5000/addToCart'
    const params ={
        body: data.id,
        method: "POST"
    }
    fetch(url,params)
    .then(data => {return data.json()})
    .then(res=>{
        let alertParent = document.getElementById('alert')
        let alert = document.createElement('div')
        alert.className ="alertMessages";
        alert.innerHTML = data.name +" "+res.responseMessage;
        alertParent.appendChild(alert)
        let updateEle = document.getElementById('totalCartItems')
        updateEle.setAttribute('role','alert')
        updateEle.innerHTML = cartItems.length+' items'
        setTimeout(()=>{
            document.getElementsByClassName('alertMessages')[0].remove();
        },4000)
    }).catch(err=> {
        document.getElementsByClassName("alertMessages").innerHTML = err;
    })
}

function pushSlides(){
    let slideIndex = 1;
    return function (n){
        slideIndex = slideIndex + n
        let images = document.getElementsByClassName('pictureContainer');
        if(slideIndex > images.length){
            slideIndex = 1
        }
        if(slideIndex < 1 ){ slideIndex = images.length}
        for(let i=0;i<images.length;i++){
            images[i].style.display = "none"; 
        }
        images[slideIndex-1].style.display = "block"; 
    }
}



function loadCart(){
    let overlay = document.getElementById('overlay');
    let cartTemplate = Handlebars.compile(document.getElementById('cartBody').innerHTML)
    let render = cartTemplate({cart:"this.cartItems"})
    overlay.innerHTML = render
    overlay.style.display = 'block';
}

function closeCart(){
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}