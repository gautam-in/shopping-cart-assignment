import { useFetch } from 'utils/customHooks';

import Home from 'components/home';

export default function Index() {
  // const { data, loading, error } = useFetch('http://localhost:5000/products');

  // console.log('---> ', data, loading, error);

  console.log('--- Home');

  return <Home />;
}
