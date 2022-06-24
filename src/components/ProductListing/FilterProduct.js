import { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchData } from "../../api/api";

export default function useFilterProduct() {
  const navigate = useNavigate();
  const [filteredCategory, setfilteredCategory] = useState({});
  const [filteredProduct, setFilteredProduct] = useState({});
  const [allProduct, setAllProduct] = useState({});

  const { search } = useLocation();

  useMemo(() => {
    const apiData = async () => {
      const categoriesData = await fetchData("categories");
      const filteredCategory = categoriesData.data
        .filter((category) => category.enabled)
        .sort((a, b) => a.order - b.order);
      setfilteredCategory(filteredCategory);
    };
    apiData();
  }, []);

  useMemo(() => {
    const apiData = async () => {
      const { data } = await fetchData("products");
      setAllProduct(data);
    };
    apiData();
  }, []);

  function handleProduct(id) {
    if (id) {
      navigate(`/products?id=${id}`);
    } else {
      navigate(`/products`);
    }
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    if (allProduct.length > 0) {
      if (search.includes("?id")) {
        let id = search.slice(4);
        setFilteredProduct(
          allProduct.filter((product) => product.category === id)
        );
      } else {
        setFilteredProduct(allProduct);
      }
    }
  }, [search, allProduct]);

  return {
    filteredCategory,
    filteredProduct,
    handleProduct,
  };
}
