import "./App.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <header>
          <Navbar />
        </header>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
