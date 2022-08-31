import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} />
    </Routes>
  );
};

export default App;
