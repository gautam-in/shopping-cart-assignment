//const { categories } = require("../../server")

window.addEventListener('onload',()=>{
    console.log(window.categories)
    var offerImage=document.getElementById('offers')
    var next = document.getElementById('nextOffer')
    var prev = document.getElementById('prevOffer')
    next.addEventListener('click',nextOffer())
    prev.addEventListener('click', prevOffer())
})

function nextOffer(){

}
function prevOffer(){

}

function validate(formName, elementName,errorId){
    let element = document.forms[formName][elementName]
    if(!element.checkValidity()){
        document.getElementById(errorId).innerHTML = element.validationMessage
    }else{
        document.getElementById(errorId).innerHTML =''
    }
    if(elementName === 'confirmPassword'){
        if(element.value === document.forms['register']['password'].value){
            document.getElementById(errorId).innerHTML =''
        }else{
            document.getElementById(errorId).innerHTML = 'Passwords Mismatch. Please Enter same password in both field'
    }
        }
}

var cartItems = new Array();
function addToCart(data){
    document.getElementById('successMessage').innerHTML= ''
    // console.log(data)
   cartItems.push(data)
    const url = 'http://localhost:5000/addToCart'
    const cartId ={
        id : data
    }
    const params ={
        body: cartId,
        method: "POST"
    }
    fetch(url,params)
    .then(data => {return data.json()})
    .then(res=>{
        let alert = document.createElement('div')
        alert.className ="successMessage"+data;
        alert.innerHTML = res.responseMessage
        setTimeout(()=>{
            document.getElementsByClassName('successMessage'+data)[0].remove();
        },4000)
    }).catch(err=> {
        document.getElementsByClassName("successMessage"+data).innerHTML = err;
    })
}