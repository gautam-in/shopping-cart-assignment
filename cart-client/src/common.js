import { globals } from "./globals";

export async function getData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getCategories = async () => {
    return await getData(`${globals.API_URL}/api/categories`);
}

export const totalCartAmount = (arr) => {
    const amount = arr
        .map((x) => {
            const { item, price } = x;
            return price * item;
        }).reduce((x, y) => x + y, 0);
    return amount;
}