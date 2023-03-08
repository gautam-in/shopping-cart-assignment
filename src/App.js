import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "components/home/Home";
import PageNotFound from "components/PageNotFound";
import Products from "components/products/Products";
import Navbar from "components/navbar/Navbar";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import SignIn from "components/signinRegister/SignIn";
import Register from "components/signinRegister/Register";
import Footer from "components/footer/Footer";
import Notification from "components/notification/Notification";
import { blue } from "@mui/material/colors";
import { isAuthenticated } from "utils/support";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ab003c",
    },
    secondary: {
      main: blue[600],
    },
  },
});

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const authRoutes = () => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    );
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <div style={{ background: "#f8f8f8" }}>
          <Navbar />
          <Container maxWidth="xl">{authRoutes()}</Container>
          <Footer />
          <Notification />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
