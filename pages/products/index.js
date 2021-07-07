import SideNavBar from '../../app/containers/SideNav';
import Products from '../../app/containers/Products';
import { useRouter } from 'next/router';
import useTitle from '../../utils/useTitle';

const CategoryPage = () => {
  const {query} = useRouter();
  return (
    <>
     {useTitle('products')}
      <SideNavBar />
      <Products category={query.category}/>
    </>
  );
}
export default CategoryPage
