import LoaderActionTypes from "./loader.types";

export const loaderStart = () => ({
  type: LoaderActionTypes.LOADER_START,
});

export const loaderEnd = () => ({
  type: LoaderActionTypes.LOADER_END,
});
