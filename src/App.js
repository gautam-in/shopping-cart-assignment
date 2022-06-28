import './App.css';
import { Login, Navbar } from './components/index-components';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = "login" element = {<Login />} />
      </Routes>
    </div>
  );
}

export default App;
