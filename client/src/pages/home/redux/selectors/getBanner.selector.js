import { createSelector } from 'reselect';

const bannerSelect = (state) => state.banner;

const selectBannerData = createSelector(bannerSelect, (banner) => banner.bannerData);
const selectBannerLoading = createSelector(bannerSelect, (banner) => banner.loading);
const selectBannerError = createSelector(bannerSelect, (banner) => banner.error);

export const getBannerSelectors = {
  selectBannerData,
  selectBannerLoading,
  selectBannerError,
};
