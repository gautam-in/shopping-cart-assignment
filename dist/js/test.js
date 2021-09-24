fetch('http://localhost:5000/products').then((res) => res.json()).then((resp) => {
    var product_desc=document.getElementById("products-out");
    resp.forEach(element => {
        console.log(element);
        product_desc.innerHTML+=` <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12"><div class="products-details">
        <h4>${element.name}</h4>
        <div class="products-details-img">
        <img src=".${element.imageURL}">
        </div>
        <p class="bg-prmry">${element.description}</p>
        <div class="d-flex flex-wrap align-items-center">
            <h5>MRP Rs.${element.price}</h5>
            <button class="buttons-primary">Buy Now</button>
        </div>
    </div>
    
    </div>`
    });
})

function productFilter(productCategry){
    fetch('http://localhost:5000/products').then((res) => res.json()).then((resp) => {
    var product_desc=document.getElementById("products-out");
    product_desc.innerHTML="";
    resp.forEach(element => {
        if(productCategry===element.category){
            product_desc.innerHTML+=` <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12"><div class="products-details">
            <h4>${element.name}</h4>
            <div class="products-details-img">
            <img src=".${element.imageURL}">
            </div>
            <p class="bg-prmry">${element.description}</p>
            <div class="d-flex flex-wrap align-items-center">
                <h5>MRP Rs.${element.price}</h5>
                <button class="buttons-primary">Buy Now</button>
            </div>
        </div>
        </div>`
        }

    });
})
}