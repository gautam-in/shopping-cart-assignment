import { useCategories } from "../../hooks";
import RootLayout from "../../layouts/Layout";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { getProducts, TProduct } from "../../apis/products";
import { useCartContext } from "../../context/cartContext";
import { SideBar } from "../../components/SideBar/SideBar";

export default function ProductsPage() {
  return (
    <RootLayout>
      <div className="flex sm:flex-row flex-col min-h-[calc(100vh_-_108px)] relative">
        <SideBar />
        <Products />
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

  const { categories } = useCategories();

  const keyId = categories.reduce((prev, current) => {
    return { ...prev, [current.key]: current.id };
  }, {});

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  const filterProducts = useMemo(() => {
    if (category)
      return products.filter(
        (prod) => prod.category === keyId[category as keyof typeof keyId]
      );
    return products;
  }, [categories, category]);

  return (
    <section className="flex-1 grid sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 pl-4 py-4">
      {filterProducts.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </section>
  );
}

export function ProductCard(props: TProduct) {
  const { dispatch } = useCartContext();
  return (
    <article className="p-2 flex flex-col border-b-2 border-b-black/25 border-dashed">
      <h2 className="font-bold flex flex-1">{props.name}</h2>
      <div className="border-r-2 mr-[-8px] pr-2 border-black/5  grid grid-cols-4 grid-rows-4">
        <img
          src={props.imageURL}
          alt={`${props.name} image`}
          className="aspect-square w-full object-contain col-span-2 row-span-4 sm:col-span-2 sm:row-span-3 lg:col-span-4 lg:row-span-2"
        />
        <div className="bg-offWhite p-2 col-span-2 row-span-2 sm:col-span-2 sm:row-span-3 lg:col-span-4 lg:row-span-1">
          <div className="h-16 overflow-hidden text-xs">
            {props.description}
          </div>
        </div>
        <div className="col-span-2 row-span-2 text-xs sm:col-span-4 flex justify-between items-center lg:col-span-4 lg:row-span-1">
          <div className="text-sm hidden lg:block w-full">
            MRP RS.{props.price}
          </div>
          <button
            className="bg-primary text-white px-4 py-2 w-full  "
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: props })}
          >
            Buy Now
            <span className="inline-block lg:hidden">
              @ MRP RS.{props.price}
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}
