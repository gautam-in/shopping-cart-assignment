export interface IAuth {
  isAuthenticated: boolean;
  authUser: Object;
  registeredUser: Object;
  error: Boolean;
  errorMsg: String;
  successMsg: String;
}
