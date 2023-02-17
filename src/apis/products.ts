export type TProduct = {
    "category":string,
    "description": string,
    "id": string,
    "imageURL": string,
    "name": string,
    "price": number,
    "sku":string,
    "stock": number,
  };

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts():Promise<TProduct[]> {
    const res = await fetch(baseUrl+"/products/index.get.json");
    return await res.json();
}
  