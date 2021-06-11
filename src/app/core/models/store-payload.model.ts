export interface AuthenticationSuccessPayload {
  email: string;
  userId: string;
  token: string;
  expirationDate: Date;
  redirect: boolean;
}

export interface LoginPayLoad {
  email: string;
  password: string;
}
