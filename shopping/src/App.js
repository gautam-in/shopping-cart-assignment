import "./App.css";

import MainContent from "./component/MainContent";
import { BrowserRouter } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./Pages/Footer/Footer";
import { CartContextProvider } from "./Context/CartContext";
import Modal from "./component/Modal/Modal";
import CartItems from "./component/Cart/CartItems/CartItems";
import CartHeader from "./component/Cart/CartHeader/CartHeader";
import CartFooter from "./component/Cart/CartFooter/CartFooter";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Modal>
            <Modal.Header>
              <CartHeader />
            </Modal.Header>
            <Modal.Body>
              <CartItems />
            </Modal.Body>
            <Modal.Footer>
              <CartFooter />
            </Modal.Footer>
          </Modal>
          <MainContent />
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
