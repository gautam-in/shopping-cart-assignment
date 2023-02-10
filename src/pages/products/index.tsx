import Link from "next/link";
import { useCategories } from "../../hooks";
import RootLayout from "../../layouts/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProducts, TProduct } from "../../apis/products";

export default function ProductsPage() {
  const { categories } = useCategories();

  return (
    <RootLayout>
      <div className="flex min-h-[calc(100vh_-_108px)]">
        <div className="bg-offWhite flex">
          <ul className="">
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
        </div>
        <section className="flex-1 grid grid-cols-4 gap-y-8 gap-x-4 pl-4 py-4">
          <Products />
        </section>
      </div>
    </RootLayout>
  );
}

export function Products() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const router = useRouter();
  const {
    query: { category },
  } = router;

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  return (
    <>
      {products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </>
  );
}

interface IProduct extends TProduct {}

export function Product(props: IProduct) {
  return (
    <article className="p-2 flex flex-col border-b-2 border-b-black/25 border-dashed">
      <h2 className="font-bold flex-1">{props.name}</h2>
      <div className="border-r-2 mr-[-8px] pr-2 border-black/5">
        <img
          src={props.imageURL}
          alt={`${props.name} image`}
          className="aspect-square w-full object-contain"
        />
        <div className="bg-offWhite p-2 ">
          <div className="h-16 overflow-hidden text-xs">
            {props.description}
          </div>
        </div>
      </div>
      <div className="flex justify-between my-2 items-center">
        <div className="text-sm">MRP RS.{props.price}</div>
        <button className="bg-primary text-white px-4 py-2">Buy Now</button>
        <div></div>
      </div>
    </article>
  );
}
