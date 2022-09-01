import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Signup from './components/Signup/Signup';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-up" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default App;
