import Link from "next/link";
import { useCategories } from "../../hooks";
import RootLayout from "../../layouts/Layout";

export default function ProductsPage() {
  const { categories } = useCategories();

  return (
    <RootLayout>
      <div className="flex h-[calc(100vh_-_108px)]">
        <aside className="w-1/4 bg-offWhite">
          <ul className="">
            {categories.map((category) => (
              <li className="px-6 py-2 border-b-2 border-black/5 text-black/75">
                <Link href={`/products?category=${category.key}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <section className="W-3/4">ProductsPage</section>
      </div>
    </RootLayout>
  );
}
