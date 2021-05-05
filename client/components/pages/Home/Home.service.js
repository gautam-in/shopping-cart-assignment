export const getOffersForCarousel = () => {
  return fetch(process.env.API_URL + "/banners", {
    method: "GET",
  }).then((response) => response.json());
};
