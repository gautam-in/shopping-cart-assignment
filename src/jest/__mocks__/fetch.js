const banners = [{
    "bannerImageUrl": "/static/images/offers/offer1.jpg",
    "bannerImageAlt": "Independence Day Deal - 25% off on shampoo",
    "isActive": true,
    "order": 1,
    "id": "5b6c38156cb7d770b7010ccc"
},
{
    "bannerImageUrl": "/static/images/offers/offer2.jpg",
    "bannerImageAlt": "Independence Day Deal - Rs120 off on surf",
    "isActive": true,
    "order": 2,
    "id": "5b6c38336cb7d770b7010ccd"
}];

const categories = [{
    "name": "Beverages",
    "key": "beverages",
    "description": "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
    "enabled": true,
    "order": 3,
    "imageUrl": "/static/images/category/beverages.png",
    "id": "5b675e5e5936635728f9fc30"
},
{
    "name": "Bakery Cakes and Dairy",
    "key": "bakery-cakes-dairy",
    "description": "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
    "enabled": true,
    "order": 2,
    "imageUrl": "/static/images/category/bakery.png",
    "id": "5b6899123d1a866534f516de"
}];

const products = [{
    "name": "Fresho Kiwi - Green, 3 pcs",
    "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
    "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
    "price": 87,
    "stock": 50,
    "category": "5b6899953d1a866534f516e2",
    "sku": "fnw-kiwi-3",
    "id": "5b6c6a7f01a7c38429530883"
},
{
    "name": "Apple - Washington, Regular, 4 pcs",
    "imageURL": "/static/images/products/fruit-n-veg/apple.jpg",
    "description": "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
    "price": 187,
    "stock": 50,
    "category": "5b6899953d1a866534f516e2",
    "sku": "fnw-apple-4",
    "id": "5b6c6aeb01a7c38429530884"
}];

export default function mockFetch(url) {
    switch (url) {
        case "http://localhost:5000/banners": {
            return {
                ok: true,
                status: 200,
                data: banners,
            };
        }
        case "http://localhost:5000/categories": {
            return {
                ok: true,
                status: 200,
                data: categories,
            };
        }
        case "http://localhost:5000/products": {
            return {
                ok: true,
                status: 200,
                data: products,
            };
        }
        default: {
            throw new Error(`Unhandled request: ${url}`);
        }
    }
}