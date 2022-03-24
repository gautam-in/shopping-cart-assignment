import '../scss/main.scss';
require('./plp.js');
require('./cart');

let interval;
let carouselNumber = 1;

const serverURL = 'http://localhost:5001/';
if (location.href.includes('index.html')) {
    window.addEventListener('load', loadCategories);
    window.addEventListener('unload', () => {
        clearInterval(interval);
    });
}




async function loadCategories() {
    try {
        interval = setInterval(() => {
            let number = carouselNumber++;
            if(number >= 5) {
                carouselNumber = 1;
            }
            loadCarousal(number);
        }, 1000);
        const productsContainer = document.querySelector('.products-container');
        const categories = await fetch(serverURL + 'categories');
        const data = await categories.json();
        data.forEach((category, index) => {
            const imageContent = `
                <div class="image-container">
                    <img class="product-image" src="../..${category.imageUrl || ''}"
                        alt="${category.description}">
                </div>
                `;
            const productContent = `
                <div class="product-details">
                    <h1 class="title">${category.name}</h1>
                    <p class="description">
                        ${category.description}
                    </p>
                    <button class="explore">
                        Explore ${category.key}
                    </button>
                </div>
            `;
            
            // appendProductsList(category, index);
            const element = document.createElement('div');
            element.classList.add('product');

            if (index % 2 === 0) {
                element.innerHTML = imageContent + productContent;
            } else {
                element.innerHTML = productContent + imageContent;
            }
            element.addEventListener('click', () => goToCategorySection(category.id, category.key));
            productsContainer.appendChild(element);
        });



    } catch (error) {
        console.log(error);
    }
}

function goToCategorySection(categoryId, categoryKey) {
    location.href = `view/plp.html#${categoryId}`;
}

function loadCarousal(number) {
    const img = document.querySelector('.carousel-image');
    const allTheDots = document.querySelectorAll('.dot');
    allTheDots.forEach((el) => el.classList.remove('dot--fill'));
    allTheDots[number - 1].classList.add('dot--fill');
    img.src = `static/images/offers/offer${number}.jpg`;
}

window.loadCarousal = loadCarousal;
