const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export  async function getBanners() {
    const res = await fetch(baseUrl+"/banners/index.get.json");
    return await res.json();
  };