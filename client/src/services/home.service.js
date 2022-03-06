import axios from "axios";

export async function getCategories() {
    const { data } = await axios('http://localhost:5000/categories');
    return data;
}