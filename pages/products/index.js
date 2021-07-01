import SideNavBar from '../../app/containers/SideNav';
import Products from '../../app/containers/Products';
import { useRouter } from 'next/router';

export default function CategoryPage() {
  const {query} = useRouter();
  return (
    <>
      <SideNavBar />
      <Products category={query.category}/>
    </>
  );
}
