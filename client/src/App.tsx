import { BrowserRouter as Router } from 'react-router-dom'

import { AppRoutes } from './Routes'

import { Header, Footer } from './Components'

import './App.scss'

const App = () => {
	return (
		<div className="App">
			<Router>
				<Header />

				<main>
					<AppRoutes />
				</main>

				<Footer />
			</Router>
		</div>
	)
}

export default App
