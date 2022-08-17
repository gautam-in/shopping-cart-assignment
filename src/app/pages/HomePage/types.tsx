/* --- STATE --- */
import { BannerItem } from 'types/banners';

export interface HomePageState {
  banners: BannerItem[];
  loading: boolean;
  error: string;
}
