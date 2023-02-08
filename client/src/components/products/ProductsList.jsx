import queryData from "@/src/utils/queryData";
import { useQuery } from "react-query";
import ProductCard from "./ProductCard";
import styles from "./ProductstList.module.scss";

export default function ProductsList() {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: queryData,
  });

  return (
    <section className={styles.listContainer}>
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  );
}
