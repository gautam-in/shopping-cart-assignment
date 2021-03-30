
const url = 'http://localhost:5000/';

async function getCategoriesData() {
    const response = await fetch(`${url}categories`);
    const data = await response.json();
    return data;
}

async function getProductsData() {
    const response = await fetch(`${url}products`);
    const data = await response.json();
    return data;
}

async function getBannersData() {
    const response = await fetch(`${url}banners`);
    const data = await response.json();
    return data;
}

async function addToCart() {
    const response = await fetch(`${url}addToCart`, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)

    });
    const data = await response.json()
    return data;
}

export { getCategoriesData, getProductsData, getBannersData, addToCart }

