
//products page
var result;

async function loadProducts() {
    try {
        var navProducts = document.querySelector('.navProductsUl');
        //run this if loop only once
        if(localStorage['category'] && navProducts.childElementCount == 0) {
            let liData = JSON.parse(localStorage['category']);
            for (let index = 0; index < liData.length; index++) {
                let liEle = document.createElement("li");
                liEle.innerText = liData[index].name;
                liEle.className = "navProductsLi";
                liEle.id = liData[index].id;
                navProducts.appendChild(liEle);
            }
        }
        result = await GetProducts();
        result = JSON.parse(result);
        formUi(result);
    } catch (error) {
        console.log(error + " products page error");
    }
}


//formUI Products page 
function formUi(result) {
    var prodContainer = document.querySelector('.navProductsContainer');
    //remove all children
    //optimise here, instead of removing filter the children if possible
    while(prodContainer.firstElementChild != null) {
        let firstchild = prodContainer.firstElementChild;
        prodContainer.removeChild(firstchild);
    }

    localStorage['products'] = [];
    let prodStorage = [];
    for (let index = 0; index < result.length; index++) {
        //let prodItem = { name:"", url:"", quantity:"", price:""}
        let prodItem = {};
        let sectionEle = document.createElement("section");
        sectionEle.id = prodItem.id = result[index].id;
        sectionEle.categoryId = result[index].category;

        let h3Ele = document.createElement("h3");
        h3Ele.innerText = prodItem.name = result[index].name;
        sectionEle.appendChild(h3Ele);

        let imgEle = document.createElement("img");
        imgEle.src = prodItem.url = result[index].imageURL;
        sectionEle.appendChild(imgEle);

        let h5Ele = document.createElement("h5");
        h5Ele.innerText = result[index].description;
        sectionEle.appendChild(h5Ele);

        let priceDiv = document.createElement("div");
        priceDiv.className = "productPriceDiv";

        let priceEle = document.createElement("h5");
        priceEle.innerText = "MRP Rs " + result[index].price;
        prodItem.price = result[index].price;
        prodItem.quantity = result[index].stock;
        
        let butEle = document.createElement("button");
        butEle.innerText = "Buy Now";
        butEle.addEventListener('click',() =>  {
            sendRequest(result[index].id)
        })

        priceDiv.appendChild(priceEle);
        priceDiv.appendChild(butEle);

        sectionEle.appendChild(priceDiv);
        prodContainer.appendChild(sectionEle);
        prodStorage[prodStorage.length] = prodItem;
    }
    localStorage['products'] = JSON.stringify(prodStorage);
}
//filter products
function filterProductsShow(categoryId) {

    let sections = document.querySelectorAll('.navProductsContainer > section');
    if(categoryId != "all") {
        for (let index = 0; index < sections.length; index++) {
            if(sections[index].categoryId === categoryId)
                sections[index].style.display = "block";
            else
                sections[index].style.display = "none";
        }
    } else {
        for (let index = 0; index < sections.length; index++) {
            sections[index].style.display = "block";
        }
    }
    
}

function sendRequest(id) {
    document.getElementById("itemCount").innerHTML = 
    parseInt(document.getElementById("itemCount").innerHTML) + 1;

    cartInstance.addItems(id);

    //Dhivya, put a post and send true response
    return true;
}