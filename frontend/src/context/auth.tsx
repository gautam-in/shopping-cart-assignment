import { createContext } from "react"

export interface AuthContextInterface {
  isUserLoggedIn: boolean
  setIsUserLoggedIn: (val: boolean) => void
}

const defaultValue: AuthContextInterface = {
  isUserLoggedIn: false,
  setIsUserLoggedIn: (val: boolean) => {},
}

export const AuthContext: React.Context<AuthContextInterface> =
  createContext(defaultValue)

export const AuthProvider = AuthContext.Provider
