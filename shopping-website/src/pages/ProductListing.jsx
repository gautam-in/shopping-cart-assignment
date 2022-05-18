import { useParams } from 'react-router-dom';
import ProductCategory from '../components/ProductCategory';
import Products from '../components/Products';
import './ProductListing.scss';

const ProductListing = () => {

  const {category} = useParams();

    return (
      <main className="plpContainer">
        <ProductCategory category = {category} />
        <Products />
      </main>
    )

}

export default ProductListing;