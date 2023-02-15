const baseUrl = process.env.NEXT_PUBLIC_API_URL;


export type TBanner = {
  "bannerImageUrl": string,
  "bannerImageAlt": string,
  "isActive": boolean,
  "order": number,
  "id": string
};

export  async function getBanners():Promise<TBanner[]> {
    const res = await fetch(baseUrl+"/banners/index.get.json");
    return await res.json();
  };