export const SHOW_LOADER = 'loader/show';
export const HIDE_LOADER = 'loader/hide';

export default {
  showLoader: () => ({
    type: SHOW_LOADER,
  }),
  hideLoader: () => ({
    type: HIDE_LOADER,
  }),
};
