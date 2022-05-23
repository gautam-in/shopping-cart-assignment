import logo from './logo.svg';
import './App.css';
import { HashRouter,Route,Routes,BrowserRouter,Switch} from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/Register/Signup';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      {/* <h2>app file</h2>
      <Login/>
      <SignUp/>
      <Home/> */}
      {/* <HashRouter>
        <Routes>
        <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
        </Routes>
      </HashRouter> */}
      <BrowserRouter>
      <Header/>

        <Switch>
        <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
