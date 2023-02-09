import { useEffect, useState } from 'react'
import { ProductList, ProductListingPageContainer } from './ProductListingPage.styles';
import ProductListItem from '../../components/ProductListItem';
import ProductCategoryFilterList from '../../components/ProductCategoryFilterList';
import ProductCategoryFilterDropdown from '../../components/ProductCategoryFilterDropdown/ProductCategoryFilterDropdown';
import appDefaults from '../../constants/index';
import makeRequest from '../../services/api/index';
import { useSelector } from 'react-redux';



const ProductListingPage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentProductCategory = useSelector(store => store.product.currentProductCategory);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [res1, res2] = await Promise.all([
          await makeRequest(appDefaults.api.getProducts),
          await makeRequest(appDefaults.api.getCategories),
        ]);
        if (!res1 || !res2) {
          throw new Error('No response from server')
        }
        setProducts(res1.data)
        const filteredResponse = res2.data?.filter(item => item.enabled).sort((a, b) => a.order - b.order);
        setCategories(filteredResponse);
      } catch (error) {
        console.log(error);
        setError(error.message)
      }
      setLoading(false);
    };

    fetchData();
  }, []);


  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <h2>Error: {error}</h2>
  }

  if (!isLoading && !error && categories?.length === 0) {
    return <h2>No Category records available</h2>;
  }

  if (!isLoading && !error && products?.length === 0) {
    return <h2>No Product records available</h2>;
  }

  return (
    <ProductListingPageContainer>
      {categories && <ProductCategoryFilterList categories={categories} />}
      {categories && <ProductCategoryFilterDropdown
        options={categories?.map(item => item)}
        value={currentProductCategory}
      />}
      <ProductList>
        {currentProductCategory.length > 0 ? products?.filter(item => item.category === currentProductCategory).map((item, ind) => <ProductListItem key={item.id} product={item} />) : products?.map((item, ind) => <ProductListItem key={item.id} product={item} />)}
      </ProductList>
    </ProductListingPageContainer>
  )
}

export default ProductListingPage