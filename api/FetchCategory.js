import { endpoint } from "../config"

const FetchCategory = async () => {
    console.log(`${endpoint}/categories`);
    const res = await fetch(`${endpoint}/categories`)
    const data = await res.json()
    console.log(data);
    return data;
    
}

export {FetchCategory}