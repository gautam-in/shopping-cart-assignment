  export type TCategory =   {
    "description":string,
    "enabled": boolean,
    "id": string,
    "imageUrl":string,
    "key":string,
    "name":string,
    "order": number,
  }

const baseUrl = process.env.NEXT_PUBLIC_API_URL;


export async function getCategories():Promise<TCategory[]> {
    const res = await fetch(baseUrl+"/categories/index.get.json");
    return await res.json();
}