import { AUTH } from "../types"

export const setAuthenticated = (id) => {
    return {
        type : AUTH,
        payload : id
    }
}