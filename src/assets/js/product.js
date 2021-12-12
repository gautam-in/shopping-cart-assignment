async function ApiCall(url) {
    return await fetch(url);
}

async function FetchAllCategories() {
    var response = await ApiCall("http://localhost:5000/categories");
    var respoanseJson = await response.json();
    for (var posts of respoanseJson) {
        ProductList(posts);
    }
}

window.addEventListener("DOMContentLoaded", FetchAllCategories);

// ----------product listing---------

function ProductList(response) {
    // console.log(response);
    var ul = document.querySelector('.category-list-ul');
    var li = document.createElement('li');
    li.className = "category-list-li";
    li.setAttribute('id', response.id)
    li.setAttribute('onclick', `ListMenu('${response.id}')`)
    li.innerText = response.name;
    ul.append(li);
}

// -------------card -----------
async function FetchAllCards() {
    var response = await ApiCall("http://localhost:5000/products");
    var respoanseJson = await response.json();
    for (var posts of respoanseJson) {
        AllCard(posts);
    }
}

window.addEventListener("DOMContentLoaded", FetchAllCards);


function AllCard(resp) {
    if(resp){
        var list = document.querySelector('.list');
        var card = document.createElement('div');
        card.className = 'listing-product';

        var cardlist = document.createElement('div');
        cardlist.className = "listing-product-element";

        var name = document.createElement('div');
        name.className = "listing-product-element-title";
        name.innerText = resp.name;

        var card_content = document.createElement('div');
        card_content.className = "listing-product-element-content";

        var image = document.createElement('img');
        image.setAttribute('src', resp.imageURL);
        image.setAttribute('alt', resp.name);
        image.setAttribute('height', '120');
        image.className = "listing-product-element-image";
        image.setAttribute('width', '100');

        var discrption = document.createElement('div');
        discrption.className = "listing-product-element-desc";
        discrption.innerText = resp.description;

        var footer = document.createElement('div');
        footer.className = "listing-product-element-footer";

        var footer_mrp = document.createElement('div');
        footer_mrp.className = "price-lg";
        footer_mrp.innerText = `MRP RS. ${resp.price}`

        var footer_buyBtn = document.createElement('button');
        footer_buyBtn.className = "listing-product-element-button button-lg";
        footer_buyBtn.innerText = "Buy Now";

        var footer_buysmBtn = document.createElement('button');
        footer_buysmBtn.className = "listing-product-element-button button-sm";
        footer_buysmBtn.innerText = "Buy Now @ Rs 999";

        // --append---
        card.append(cardlist);
        cardlist.append(name);
        cardlist.append(card_content);
        cardlist.append(footer);

        card_content.append(image);
        card_content.append(discrption);

        footer.append(footer_mrp);
        footer.append(footer_buyBtn);
        footer.append(footer_buysmBtn);

        list.append(card);

    }else{
        alert("Data");
        var list = document.querySelector('.no-data-product');
        console.log(list);
            list.style.display = "block";       

    }
}


// -----------filter all cards according to menu-----

async function FetechFilerCategories() {
    var response = await fetch("http://localhost:5000/products");
    var respoanseJson = await response.json();
    return respoanseJson;
}

async function ListMenu(id) {
    var active = document.querySelectorAll('.category-list-li');
    for(var act of active){
        act.className = "category-list-li";
    }

    var element = document.getElementById(id);    
    element.className = "category-list-li active";
    var allcategories = await FetechFilerCategories();
    var filtercategory =  allcategories.filter(cl => cl.category ==id);
    var list = document.querySelector('.list');
    list.innerHTML = '';
    for (var posts of filtercategory) {
        AllCard(posts);
    }
}