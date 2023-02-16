import queryData from "@/src/utils/queryData";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import ProductCard from "./ProductCard";
import styles from "./ProductstList.module.scss";

export default function ProductsList({ selectedFilterCategory }) {
  const queryClient = useQueryClient();
  const [isFiltered, setIsFiltered] = useState(false);

  const { data: allProducts } = useQuery({
    queryKey: ["products"],
    queryFn: queryData,
  });

  const { data: filteredProducts } = useQuery({
    queryKey: ["filtered-products"],
    queryFn: () => {},
  });

  useEffect(() => {
    if (selectedFilterCategory) {
      setIsFiltered(true);
      const filteredCategoryProducts = allProducts.filter(
        (product) => product.category === selectedFilterCategory
      );

      queryClient.setQueryData(["filtered-products"], filteredCategoryProducts);
    } else {
      queryClient.removeQueries({
        queryKey: ["filtered-products"],
        exact: true,
      });
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
