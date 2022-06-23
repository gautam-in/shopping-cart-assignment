import { Box } from "@mui/material";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../errorPage/ErrorPage";
import Footer from "../footer/Footer";
import Homepage from "../homepage/Homepage";
import Login from "../login/Login";
import ResponsiveAppBar from "../navbar/ResponsiveAppBar";
import PlpPage from "../plp/PlpPage";
import Signup from "../signup/Signup";

const RoutesComp = () => {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Box sx={{ px: { xs: 0, md: 20 }, py: 1 }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<PlpPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Box>
      <Footer />
    </BrowserRouter>
  );
};

export default RoutesComp;
