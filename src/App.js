import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Routes from "./components/common/Routes";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
