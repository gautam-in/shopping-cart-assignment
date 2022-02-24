import {createSelector} from 'reselect';

const displayBanner = state => state.banners;

export const displayBannerData = createSelector(
    [displayBanner],
    (banner) => banner.bannerData
)

export const displayIsDataFetching = createSelector(
    [displayBanner],
    (banner) => banner.loading
)