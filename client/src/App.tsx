import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import './styles/main.scss';

const routers = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={routers} fallbackElement={<h1>Something went wrong</h1>} />;
}

export default App;
