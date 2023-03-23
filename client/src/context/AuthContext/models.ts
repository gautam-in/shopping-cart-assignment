import { ReactNode, createContext } from "react"
import { Auth, User, UserCredential } from "firebase/auth"

export interface AuthProviderProps {
  children?: ReactNode
}

export interface UserContextState {
  isAuthenticated: boolean
  isLoading: boolean
  id?: string
}

export const UserStateContext = createContext<UserContextState>(
  {} as UserContextState
)

export interface AuthContextModel {
  auth: Auth
  user: User | null
  login: (email: string, password: string) => Promise<UserCredential>
  register: (email: string, password: string) => Promise<UserCredential>
  logout: () => Promise<void>
  sendPasswordResetEmail?: (email: string) => Promise<void>
}
