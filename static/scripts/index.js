//const { categories } = require("../../server")

window.addEventListener('onload',()=>{
    console.log(window.categories)
})

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
    data = JSON.parse(data)

    this.cartItems.push(data)
    const url = 'http://localhost:5000/addToCart'
    const cartId ={
        id : data.id
    }
    const params ={
        body: cartId,
        method: "POST"
    }
    fetch(url,params)
    .then(data => {return data.json()})
    .then(res=>{
        let alertParent = document.getElementById('alert')
        let alert = document.createElement('div')
        alert.className ="alertMessages"+data.id;
        //console.log(alert)
        alert.innerHTML = data.name +" "+res.responseMessage;
        alertParent.appendChild(alert)
        let updateEle = document.getElementById('totalCartItems')
        updateEle.setAttribute('role','alert')
        updateEle.innerHTML = cartItems.length+' items'
        setTimeout(()=>{
            document.getElementsByClassName('alertMessages'+data.id)[0].remove();
        },4000)
    }).catch(err=> {
        document.getElementsByClassName("alertMessages"+data.id).innerHTML = err;
    })
}


function loadCart(){
    let overlay = document.getElementById('overlay');
    let cartTemplate = Handlebars.compile(document.getElementById('cartBody').innerHTML)
    console.log(cartTemplate)
    console.log(this.cartItems)
    var render = cartTemplate({cart:"this.cartItems"})
    console.log(render)
    overlay.innerHTML = render
    overlay.style.display = 'block';
}

function closeCart(){
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}