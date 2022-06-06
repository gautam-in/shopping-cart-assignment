import { UPDATE_BANNERS } from "./BannerActionTypes";

export const updateBanners = (banners) => {
  return {
    type: UPDATE_BANNERS,
    payload: banners,
  };
};
