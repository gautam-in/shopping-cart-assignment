import { useEffect, useState } from 'react'
import { ProductList, ProductListingPageContainer } from './ProductListingPage.styles';
import ProductListItem from '../../components/ProductListItem';
import ProductCategoryFilterList from '../../components/ProductCategoryFilterList';
import ProductCategoryFilterDropdown from '../../components/ProductCategoryFilterDropdown/ProductCategoryFilterDropdown';
import appDefaults from '../../constants/index';
import makeRequest from '../../services/api/index';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

  const showToast = () => {
    toast.success('Item added to the cart', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };


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
      <ToastContainer />
      {categories && <ProductCategoryFilterList categories={categories} />}
      {categories && <ProductCategoryFilterDropdown
        options={categories?.map(item => item)}
        value={currentProductCategory}
      />}
      <ProductList>
        {currentProductCategory.length > 0 ? products?.filter(item => item.category === currentProductCategory).map((item, ind) => <ProductListItem showToast={showToast} key={item.id} product={item} />) : products?.map((item, ind) => <ProductListItem showToast={showToast} key={item.id} product={item} />)}
      </ProductList>
    </ProductListingPageContainer>
  )
}

export default ProductListingPage