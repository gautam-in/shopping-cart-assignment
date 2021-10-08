import { ActionHelper } from "utils/actionHelper";
const prefix = "signIn";
const registerPrefix = "register";
const logoutPrefix = "logout";
const status = "status";

const SIGNIN = {
  POST: ActionHelper.actionTypesCreator(prefix, "POST_SIGNIN")
};

const REGISTER = {
  POST: ActionHelper.actionTypesCreator(registerPrefix, "POST_REGISTER")
};

const LOGOUT = {
  CLEAR: ActionHelper.actionTypesCreator(logoutPrefix, "LOGOUT")
};

const SET_USER_STATUS = {
  SET: ActionHelper.actionTypesCreator(status, "SET_USER_STATUS")
};

export { SIGNIN, REGISTER, LOGOUT, SET_USER_STATUS };
