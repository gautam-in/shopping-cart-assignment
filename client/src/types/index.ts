export type CategoryType = {
  name: string;
  description: string;
  id: string;
  key: string;
  imageUrl: string;
  order: number;
};

export type BannerType = {
  id: string;
  isActive: boolean;
  order: number;
  bannerImageAlt: string;
  bannerImageUrl: string;
};

export type ProductType = {
  category: string;
  description: string;
  id: string;
  imageURL: string;
  name: string;
  price: number;
  sku: string;
  stock: number;
};
