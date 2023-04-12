import React, { useEffect, useState, useContext } from "react"
import { User } from "firebase/auth"

import { auth } from "../../utils"
import { register, login, logout, resetPassword } from "./authActions"

import {
  AuthContextModel,
  AuthProviderProps,
  UserContextState,
  UserStateContext,
} from "./models"

export const AuthContext = React.createContext<AuthContextModel>(
  {} as AuthContextModel
)

export function useAuth(): AuthContextModel {
  return useContext(AuthContext)
}

export const AuthContextProvider = ({
  children,
}: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubsrcibe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })
    return unsubsrcibe
  }, [])

  const values = {
    user,
    auth,
    register,
    login,
    logout,
    resetPassword,
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export const useUserContext = (): UserContextState => {
  return useContext(UserStateContext)
}
