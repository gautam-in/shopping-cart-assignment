import { useEffect, useState } from "react";
import { getCategories, TCategory } from "../../apis/categories";
import Category from "../Category/Category";

export default function Categories() {
  const [categories, setCategories] = useState<TCategory[]>([]);

  useEffect(() => {
    getCategories().then((res) =>
      setCategories(
        res.sort((a, b) => a.order - b.order).filter((cat) => cat.enabled)
      )
    );
  }, []);

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
