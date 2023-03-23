import {
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth"

import { auth } from "../../utils"

export const register = (
  email: string,
  password: string
): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const login = (
  email: string,
  password: string
): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password)
}
export const resetPassword = (email: string): Promise<void> => {
  return sendPasswordResetEmail(auth, email)
}

export const logout = async () => {
  await auth.signOut()
}
