import { withRouter } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default withRouter(App);
