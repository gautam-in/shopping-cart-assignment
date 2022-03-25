import { Error } from "../../components/Error";
import { api } from "../../constants";
import { useFetch } from "../../hooks/useFetch";
import { Banner } from "./Banner";
import "./Categories.scss";
import { Category } from "./Category";

export const Categories = () => {
  const [{ apiData: categories = [], error }] = useFetch(api.categories);

  const sortedCategories = categories?.sort((a, b) => a.order - b.order);

  return (
    <div className="categories my-1">
      {error && <Error />}
      <Banner />

      {sortedCategories.map((category, i) => {
        const isEven = i % 2 === 0;
        return category?.enabled ? (
          <Category
            {...category}
            key={category.id}
            keyName={category.key}
            reverse={!isEven}
          />
        ) : null;
      })}
    </div>
  );
};
