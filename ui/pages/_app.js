import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import { store } from '../redux/store';
import AuthProvider from '../Authcontext';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<AuthProvider>
				<Provider store={store}>
					<Layout>
						<main>
							<Component {...pageProps} />
						</main>
					</Layout>
				</Provider>
			</AuthProvider>
		</ChakraProvider>
	);
}

export default MyApp;
