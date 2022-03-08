import axios from "axios";

export async function getCategories() {
    const categories = [];
    const { data } = await axios('http://localhost:5000/categories');

    data.filter((d) => d.order > 0).map((d) => { categories[d.order - 1] = d })
    return categories;

}