/* JS for Modal Cart */
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("shopping-cart");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//====================================================================================================================

var ourRequest = new XMLHttpRequest();
var productListData = '';
var categoryListData = '';
ourRequest.open('GET', 'server/products/index.get.json');
ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
        var data = JSON.parse(ourRequest.responseText);

        productListData = data;
        console.log("productdata:", productListData);
        createHTML(data)
    } else {
        console.log("We connected to the server, but it returned an error.");
    }
};

ourRequest.onerror = function() {
    console.log("Connection error");
};

ourRequest.send();



function createHTML(productData) {
    var rawTemplate = document.getElementById("productlistTemplate").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(productData);

    var productContainer = document.getElementById("product-list-section");
    productContainer.innerHTML = ourGeneratedHTML;
}


var ourRequest1 = new XMLHttpRequest();
ourRequest1.open('GET', 'server/categories/index.get.json');
ourRequest1.onload = function() {
    if (ourRequest1.status >= 200 && ourRequest1.status < 400) {
        var data = JSON.parse(ourRequest1.responseText);
        console.log(data);
        categoryListData = data;
        console.log("category data:", categoryListData);
        createHTMLNav(data)
    } else {
        console.log("We connected to the server, but it returned an error.");
    }
};

ourRequest1.onerror = function() {
    console.log("Connection error");
};

ourRequest1.send();

function createHTMLNav(productData) {
    var rawTemplate = document.getElementById("productlistNavTemplate").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(productData);

    var productContainer = document.getElementById("left-nav-filter");
    productContainer.innerHTML = ourGeneratedHTML;
}

// var theParent = document.getElementById("side-nav-filter-list").getElementsByTagName('li');;
// theParent.addEventListener("click", display, false);

function display(elem) {
    var x = elem.getAttribute("id");
    if (x != null) {
        listFilter(x);
    } else {
        createHTML(productListData);
    }


}

function listFilter(value) {
    var finalistData = [{}];
    finalistData = Object.assign({}, productListData);
    finalistData.products = productListData.products.filter(function(val) {
        if (val.category === value) {

            return val;
        }
    });

    console.log(finalistData);
    createHTML(finalistData);
}