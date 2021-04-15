function importAll(r: any) {
  let images: any = {};
  r.keys().map((item: any, index: any) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export const offerImages: any = importAll(
  require.context("../../assets/images/offers", false, /\.(png|jpe?g|svg)$/)
);

export const categoryImages: any = importAll(
  require.context("../../assets/images/category", false, /\.(png|jpe?g|svg)$/)
);
