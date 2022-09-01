// Copied from '@octokit/rest'
export interface BannerItem {
  bannerImageUrl: string;
  bannerImageAlt: string;
  isActive: boolean;
  order: number;
  id: string;
}

export interface CategoryItem {
  description: string;
  enabled: boolean;
  id: string;
  imageUrl: string;
  key: string;
  name: string;
  order: number;
}
