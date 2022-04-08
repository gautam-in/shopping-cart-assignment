import * as authTypes from './auth-types';

export const userLogin = () => {
    return {
        type: authTypes.LOGIN
    }
}