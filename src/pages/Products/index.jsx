import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductListing from "../../components/ProductListing";
import Loader from "../../components/Spinner";
import Toast from "../../components/Toast";
import { axiosFetch } from "../../services/utils";

const Products = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const categories = await axiosFetch("categories");
        setCategories(categories);
        setError(false);

        const products = await axiosFetch("products");
        setProducts(products);
        setError(false);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
        setProducts([]);
        setCategories([]);
      }
    };
    setTimeout(fetchAPI, 300);
  }, []);

  const closeToast = () => {
    setError(false);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ProductListing
          products={products}
          categories={categories}
          categoryId={searchParam.get("categoryId")}
          setSearchParam={setSearchParam}
        />
      )}
      {error && (
        <Toast
          toastType="error"
          textMessage="Sorry something went wrong!"
          closeToast={closeToast}
        />
      )}
    </>
  );
};

export default Products;
