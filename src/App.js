import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "components/home/Home";
import PageNotFound from "components/PageNotFound";
import Product from "components/products/Product";
import Products from "components/products/Products";
import Navbar from "components/navbar/Navbar";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import SignIn from "components/signIn/SignIn";
import Register from "components/register/Register";
import Footer from "components/footer/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ab003c",
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Navbar />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products">
                <Route index element={<Products />} />
                <Route path=":id" element={<Product />} />
              </Route>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/register" element={<Register />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Container>

          <Footer />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
