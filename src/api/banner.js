import { getRequest } from '../utils/apiHelper';

export const fetchBanners = () => getRequest('/banners');