import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom"
import  "./App.scss"
import Routes from "./routing/Routes";


function App() {
  const {cartOpen}=useSelector(state=>state.CartReducer)
  return (
    <div className={cartOpen?"overlay":""}>

      <Router>
        <Routes />
      </Router>

    </div>
  );
}

export default App;


