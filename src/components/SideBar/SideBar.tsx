import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCategories } from "../../hooks";

export function SideBar() {
  const [show, setShow] = useState(false);
  const { categories } = useCategories();
  const router = useRouter();
  const {
    query: { category },
  } = router;

  const categoryName = useMemo(() => {
    return categories.find((cat) => cat.key === category)?.name;
  }, [category]);

  return (
    <aside className="bg-offWhite flex flex-col">
      <button
        className="bg-primary text-white p-4 flex justify-between sm:hidden"
        onClick={() => setShow((prev) => !prev)}
      >
        {categoryName || "Select Category"}
        <span className={"transition-all " + (show ? "rotate-180" : "")}>
          &#x2304;
        </span>
      </button>
      <ul className={"w-full " + (show ? "block" : "hidden sm:block")}>
        {categories.map((category) => (
          <li
            className="px-6 py-2 border-b-2 border-black/5 text-black/75"
            key={category.id}
          >
            <Link href={`/products?category=${category.key}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
