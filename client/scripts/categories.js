import { fetchData } from './utils.js';
    // const categories = [
//     {
//       "name": "Beverages",
//       "key": "beverages",
//       "description": "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
//       "enabled": true,
//       "order": 3,
//       "imageUrl": "/static/images/category/beverages.png",
//       "id": "5b675e5e5936635728f9fc30"
//     },
//     {
//       "name": "Bakery Cakes and Dairy",
//       "key": "bakery-cakes-dairy",
//       "description": "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
//       "enabled": true,
//       "order": 2,
//       "imageUrl": "/static/images/category/bakery.png",
//       "id": "5b6899123d1a866534f516de"
//     },
//     {
//       "name": "Beauty and Hygiene",
//       "key": "beauty-hygiene",
//       "description": "Buy beauty and personal care products online in India at best prices.",
//       "enabled": true,
//       "order": 4,
//       "imageUrl": "/static/images/category/beauty.png",
//       "id": "5b68994e3d1a866534f516df"
//     },
//     {
//       "name": "Baby Care",
//       "key": "baby",
//       "description": "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
//       "enabled": true,
//       "order": 5,
//       "imageUrl": "/static/images/category/baby.png",
//       "id": "5b6899683d1a866534f516e0"
//     },
//     {
//       "name": "Fruits & Vegetables",
//       "key": "fruit-and-veg",
//       "description": "A variety of fresh fruits and vegetables.",
//       "enabled": true,
//       "order": 1,
//       "imageUrl": "/static/images/category/fruits.png",
//       "id": "5b6899953d1a866534f516e2"
//     }
//   ]
export class Category extends HTMLElement{
    constructor(){
        super();
    }

    async connectedCallback(){
        this.innerHTML = `
        <main class="categories-container"></main>
        `;

        const categories = await fetchData('http://localhost:5000/categories');
        const catContainer = document.querySelector('.categories-container');
        let categoryEle = document.createElement('section');
        categoryEle.classList.add('category-element');
        catContainer.appendChild(categoryEle);
        categories.forEach((category, index) => {
            if(index%2 === 0){
            let catImage = document.createElement('img');
            catImage.classList.add('cat-img')
            category.imageUrl ? catImage.setAttribute('src',  '../..' + category.imageUrl) : null;
            catImage.setAttribute('alt', category.name);
            categoryEle.appendChild(catImage);
            let catContent = document.createElement('aside');
            catContent.classList.add('side-content')
            let catHeading = document.createElement('h4');
            catHeading.innerText = category.name;
            catContent.appendChild(catHeading);
            let catSubHeading = document.createElement('p');
            catSubHeading.innerText = category.description
            catContent.appendChild(catSubHeading);
            let catButton = document.createElement('button')
            catButton.classList.add('cat-button');
            catButton.setAttribute('id', category.id);
            catButton.innerText = `Explore ` + category.name.toLowerCase()
            catContent.appendChild(catButton);
            categoryEle.appendChild(catContent);
            }
            else{
                let catContent = document.createElement('aside');
                catContent.classList.add('side-content')
                let catHeading = document.createElement('h4');
                catHeading.innerText = category.name;
                catContent.appendChild(catHeading);
                let catSubHeading = document.createElement('p');
                catSubHeading.innerText = category.description
                catContent.appendChild(catSubHeading);
                let catButton = document.createElement('button')
                catButton.classList.add('cat-button');
                catButton.setAttribute('id', category.id);
                catButton.innerText = `Explore ` + category.name.toLowerCase();
                catContent.appendChild(catButton);
                categoryEle.appendChild(catContent);
                let catImage = document.createElement('img');
                catImage.classList.add('cat-img')
                category.imageUrl ? catImage.setAttribute('src',  '../..' + category.imageUrl) : null;
                catImage.setAttribute('alt', category.name);
                categoryEle.appendChild(catImage);
            }
        });
        categoryEle.addEventListener('click', event => redirectToProduct(event));

        function redirectToProduct(event){
            if(event.target.classList[0] === 'cat-button'){
                window.localStorage.setItem('categoryId', event.target.id);
                window.location.href='../views/products.html';
            }
        }
    }
}