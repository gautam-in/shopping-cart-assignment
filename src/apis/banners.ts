export  async function getBanners() {
    const res = await fetch("../server/banners/index.get.json");
    return await res.json();
  };