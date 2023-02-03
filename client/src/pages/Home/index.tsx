import { useMemo } from "react";
import { CategoryCard } from "components";
import { useQuery } from "utils/fetchData";
import { Banners } from "./Banners";

export const Home = () => {
  const { data: banners } = useQuery("/banners");
  const { data: categories } = useQuery("/categories");

  const categoryOrder = useMemo(() => {
    return categories
      .sort((a: Category, b: Category) => a.order - b.order)
      .filter((item: Category) => item.key !== "seafood");
  }, [categories]);

  return (
    <div>
      <Banners data={banners} />
      <section>
        {categoryOrder?.map((item: Category, index: number) => {
          return <CategoryCard key={item.id} category={item} index={index} />;
        })}
      </section>
    </div>
  );
};
