export interface UserInt {
  email: string;
  displayName?: string;
  userId?: string;
  password?: string;
  redirect?: boolean;
}
export class User implements UserInt {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
