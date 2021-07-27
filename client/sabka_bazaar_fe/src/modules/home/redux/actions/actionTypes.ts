import { ActionHelper } from "utils/actionHelper";

const bannerPrefix = "banner";
const categoryPrefix = "category";

const BANNER = {
  GET: ActionHelper.actionTypesCreator(bannerPrefix, "GET_BANNER")
};

const CATEGORY = {
  GET: ActionHelper.actionTypesCreator(categoryPrefix, "GET_CATEGORY")
};

export { BANNER, CATEGORY };
