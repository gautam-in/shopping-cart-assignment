  export type TCategory =   {
    "description":string,
    "enabled": boolean,
    "id": string,
    "imageUrl":string,
    "key":string,
    "name":string,
    "order": number,
  }

export async function getCategories():Promise<TCategory[]> {
    const res = await fetch("../server/categories/index.get.json");
    return await res.json();
}