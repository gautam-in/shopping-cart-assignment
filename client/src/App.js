import {BrowserRouter} from 'react-router-dom';

import Header from './Components/Header/Header.component';
import Footer from './Components/Footer/Footer.component';
import AppRoutes from './AppRoutes/AppRoutes';

function App() {

  return (
    <>
    <BrowserRouter>
    <div className="App">
        <Header />
    
      <AppRoutes />
      
      <Footer />
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
