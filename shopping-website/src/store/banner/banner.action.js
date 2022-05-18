import { createAction } from "../../utils/reducer/reducer.util";
import { BANNER_ACTION_TYPES } from "./banner.types";

export const setBannerData = (bannerData) => createAction(BANNER_ACTION_TYPES.SET_BANNER_DATA, bannerData);
