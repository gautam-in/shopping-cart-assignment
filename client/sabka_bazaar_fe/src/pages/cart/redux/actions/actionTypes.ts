import { ActionHelper } from "utils/actionHelper";

const cartPrefix = "CART";

const TOGGLE_MODAL = "TOGGLE_MODAL";

const CART = {
  POST: ActionHelper.actionTypesCreator(cartPrefix, "POST_CART")
};

const DECREMENT_PRODUCT = "DECREMENT_PRODUCT";

export { TOGGLE_MODAL, CART, DECREMENT_PRODUCT };
