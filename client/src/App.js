import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/index';
import AppRoutes from './routes/AppRoutes';

function App() {

  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;