import { ActionHelper } from "utils/actionHelper";
const prefix = "login";
const registerPrefix = "register";
const logoutPrefix = "logout";

const LOGIN = {
  POST: ActionHelper.actionTypesCreator(prefix, "POST_LOGIN")
};

const REGISTER = {
  POST: ActionHelper.actionTypesCreator(registerPrefix, "POST_REGISTER")
};

const LOGOUT = {
  CLEAR: ActionHelper.actionTypesCreator(logoutPrefix, "LOGOUT")
};

export { LOGIN, REGISTER, LOGOUT };
