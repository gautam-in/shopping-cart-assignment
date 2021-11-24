import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const isLoggedIn = localStorage.getItem("isLogged");
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
