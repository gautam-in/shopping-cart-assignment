/* eslint-disable react/jsx-filename-extension */
import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import { auth } from './firebase';

const AuthContext = createContext();

function useAuth() {
  return useContext(AuthContext);
}

function signup(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

function login(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}
function logout() {
  return auth.signOut();
}

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      setLoading(false);
    });
    return unsubscriber;
  }, []);

  const value = { currentUser };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export {
  login, logout, signup, useAuth,
};
export default AuthProvider;
