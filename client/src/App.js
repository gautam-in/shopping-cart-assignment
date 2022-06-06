import { BrowserRouter } from 'react-router-dom';
import Navbar from './component/Header/Navbar';
import Router from './router/Router';
import Footer from './component/Footer/Footer';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Navbar />
				<Router />
				<Footer />
			</BrowserRouter>
		</Provider>
	);
};

export default App;
