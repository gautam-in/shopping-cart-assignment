import queryData from "@/src/utils/queryData";
import { useQuery } from "react-query";
import styles from "./ProductsContainer.module.scss";

export default function ProductsFilter() {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: queryData,
  });

  const validCategories = categories
    .sort((a, b) => a.order - b.order)
    .filter((item) => item.order > 0);

  return (
    <>
      <div className={styles.sideFilter}>
        {validCategories.map((item) => (
          <a href={`#${item.name}`}>{item.name}</a>
        ))}
      </div>
      <div className={styles.selectFilter}>
        <select name="categories" id="categories">
          <option disabled="">
            Please choose...
          </option>
          {validCategories.map((item) => (
            <option value={item.name}>{item.name}</option>
          ))}
        </select>
      </div>
    </>
  );
}
