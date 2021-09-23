import { ActionHelper } from "utils/actionHelper";
const registerPrefix = "signUp";

const SIGNUP = {
  POST: ActionHelper.actionTypesCreator(registerPrefix, "POST_SIGNUP")
};

export { SIGNUP };
