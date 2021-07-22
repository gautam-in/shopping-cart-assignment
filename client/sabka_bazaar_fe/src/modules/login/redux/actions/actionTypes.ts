import { ActionHelper } from "utils/actionHelper";
const prefix = "login";
const registerPrefix = "register";
const LOGIN = {
  POST: ActionHelper.actionTypesCreator(prefix, "POST_LOGIN")
};

const REGISTER = {
  POST: ActionHelper.actionTypesCreator(registerPrefix, "POST_REGISTER")
};

export { LOGIN, REGISTER };
