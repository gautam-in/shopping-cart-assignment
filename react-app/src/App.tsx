import { useLocation, Route, Routes } from "react-router-dom";
import ScrollToTopButton from "./components/basic/ScrollToTopButton";

import Layout from "./components/layout";
import { routes } from "./config/routes.config";
import { GlobalContextProvider } from "./context/myGLobalContext";
import { useScrollToTop } from "./hooks";

function App() {
  const location = useLocation();

  useScrollToTop();

  return (
    <GlobalContextProvider>
      <Layout>
        <Routes location={location}>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Layout>
      <ScrollToTopButton />
    </GlobalContextProvider>
  );
}

export default App;
