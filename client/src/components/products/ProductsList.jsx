import queryData from "@/src/utils/queryData";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import ProductCard from "./ProductCard";
import styles from "./ProductstList.module.scss";

export default function ProductsList({ selectedFilterCategory }) {
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { data: allProducts } = useQuery({
    queryKey: ["products"],
    queryFn: queryData,
  });

  useEffect(() => {
    if (selectedFilterCategory) {
      setIsFiltered(true);
      const filteredCategoryProducts = allProducts.filter(
        (product) => product.category === selectedFilterCategory
      );

      setFilteredProducts(filteredCategoryProducts);
    } else {
      setFilteredProducts([]);
    }
  }, [selectedFilterCategory]);

  const renderList = () => {
    let list;
    if (isFiltered && filteredProducts?.length) {
      list = filteredProducts;
    } else {
      list = allProducts;
    }

    return list.map((item, index) => (
      <ProductCard key={item.id} item={item} index={index} />
    ));
  };

  return <section className={styles.listContainer}>{renderList()}</section>;
}
