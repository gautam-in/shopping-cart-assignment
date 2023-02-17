import { useCategories } from "../../hooks";
import Category from "../Category/Category";

export default function Categories() {
  const { categories } = useCategories();

  return (
    <section className="divide-dashed divide-y">
      {categories.map((catogory, index) => (
        <Category
          key={catogory.id}
          description={catogory.description}
          imageUrl={catogory.imageUrl}
          name={catogory.name}
          slug={catogory.key}
          rtl={index % 2 === 0}
        />
      ))}
    </section>
  );
}
