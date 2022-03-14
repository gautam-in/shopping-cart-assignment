const serverURL = 'http://localhost:5001/';

window.addEventListener('load', loadCategories);

async function loadCategories() {
    try {
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
            element.addEventListener('click', () => goToCategorySection(category.id));
            productsContainer.appendChild(element);
        });



    } catch (error) {
        console.log(error);
    }
}

function goToCategorySection(categoryId) {
    location.href = `../view/plp.html#${categoryId}`;
}
