console.log('working')

let submitBtn = document.getElementById('submit');

function addProduct(event) {
    // console.log(event);
    // console.log('product added');
    fetch('http://localhost:5000/products', {
        method: 'get'
    }).then(async (data) => { 
      let parsed =  await data.json();
      console.log(parsed);
    });
}

submitBtn.addEventListener('click', addProduct);

addProduct('ww');
