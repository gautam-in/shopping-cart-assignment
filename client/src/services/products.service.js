import axios from "axios";

export async function getProducts() {
    const { data } = await axios('http://localhost:5000/products');
    return data;
}

export function filterCategory(items, id) {
    return items.filter((item) => item.category === id);

}