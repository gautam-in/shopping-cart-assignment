import { Banner } from './banner.model';

export interface BannerState {
  banners: Banner[];
  error: string;
  loading: boolean;
}
