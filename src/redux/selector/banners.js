import { createSelector } from 'reselect';

export const bannersSelector = (state) => state.banners;

export const allBannersData = createSelector(bannersSelector, (bannersHash) => {
  return {
    ...bannersHash,
    data:
      bannersHash.data && Object.keys(bannersHash.data).length > 0
        ? Object.values(bannersHash.data)
        : []
  };
});
