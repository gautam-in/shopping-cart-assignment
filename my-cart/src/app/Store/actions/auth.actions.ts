import { User } from "../../models/user.model";
import { AuthState } from "./auth.state";

export const SIGN_IN = "SIGN_IN";
export const SIGN_IN_START = "SIGN_IN_START";
export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_START = "SIGN_UP_START";
export const LOG_OUT = "LOG_OUT";
export const AUTH_ERROR = "AUTH_ERROR";


export class SignIn {
    readonly type = SIGN_IN
    constructor(public payload: AuthState) {
        this.payload = payload;
    }
}

export class SignInStart {
    readonly type = SIGN_IN_START;
    constructor(public payload: User) {
        this.payload = payload;
    }
}

export class SignUp {
    readonly type = SIGN_UP
    constructor(public payload: AuthState) {
        this.payload = payload;
    }
}

export class SignUpStart {
    readonly type = SIGN_UP_START
    constructor(public payload: User) {
        this.payload = payload;
    }
}

export class Logout {
    readonly type = LOG_OUT
}

export class AuthError {
    readonly type = AUTH_ERROR;
    constructor(public payload: string) {
        this.payload = payload;
    }
}





