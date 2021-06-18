export interface Product {
  name: string;
  imageURL: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  sku: string;
  id: string;
}

export interface Category {
  name: string;
  key: string;
  description: string;
  enabled: boolean;
  order: number;
  imageUrl: string;
  id: string
}

export interface Banner {
  bannerImageUrl: string;
  bannerImageAlt: string;
  isActive: boolean;
  order: number;
  id: string;
}