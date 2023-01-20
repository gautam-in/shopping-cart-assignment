import { useLocation, Route, Routes } from "react-router-dom";

import Layout from "./components/layout";
import { routes } from "./config/routes.config";

function App() {
  const location = useLocation();

  return (
    <Layout>
      <Routes location={location}>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
