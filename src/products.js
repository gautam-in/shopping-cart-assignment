import 'regenerator-runtime/runtime';

async function getCategories() {
    let data = sessionStorage.getItem('categories');
    if (!data) {
        data = await fetch('http://localhost:5000/categories');
        data = await data.json();
        data.sort((a, b) => a.order - b.order);
        sessionStorage.setItem('categories', JSON.stringify(data));
    }
    else {
        data = JSON.parse(data);
    }
    const categoriesPane = document.querySelector('.categories-pane')
    for (let element of data) {
        if (element.enabled) {
            const divElement = document.createElement('div');
            divElement.classList.add('col-12', 'shadow', 'py-3');
            divElement.textContent = element.name;
            categoriesPane.append(divElement);
        }
    }
}

async function getProducts() {
    let data = await fetch('http://localhost:5000/products');
    data = await data.json();
    console.log(data);
    const productsRow = document.querySelector('.products-row');
    data.forEach(element => {
        const divElement = document.createElement('div');
        divElement.classList.add('col-lg-3', 'col-md-6', 'col-sm-12', 'my-3', 'text-center', 'product-box');
        const h4 = document.createElement('h4');
        h4.textContent = element.name;
        const image = document.createElement('img');
        image.src = element.imageURL;
        image.height = '150';
        image.alt = element.name;
        divElement.append(h4, image);
        productsRow.append(divElement);
    });

}

getCategories();
getProducts();