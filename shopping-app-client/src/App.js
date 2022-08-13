import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route  } from "react-router-dom";
import  Register  from './components/Register';

function App() {
  return (
    <Router>
      <Route path='/register' component={Register} />
    </Router>
  );
}

export default App;
