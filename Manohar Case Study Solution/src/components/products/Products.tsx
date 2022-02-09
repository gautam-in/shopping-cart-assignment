import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, MainCart } from "../../actions/action";
// import { IStore } from "../../model/IStore";
import { Product } from "./IProduct";
import ProductList from "./ProductList";
import Sidebar from "./Sidebar";

export interface Categories {
  name: string;
  key: string;
  description: string;
  enabled: boolean;
  order: number;
  imageUrl: string;
  id: string;
}

export default function Products() {
  const [data, setData] = useState<Categories[]>([]);
  // const [product, setProduct] = useState<Product[]>([]);
  const [filteredProduct, setFilteredProduct] = useState<Product[]>([]);
  const [activeFilter, setActiveFilter] = useState("");

  const mainCart = useSelector((state: any) => state.mainCart);
  const size: boolean = useSelector((state: any) => state.size);
  // console.log(size);
  const dispatch = useDispatch();

  // const cart = useSelector((state: any) => state.cart);
  // console.log(process.env);

  const addtocart = (val: string) => {
    dispatch(AddToCart(val, mainCart));
  };

  const listItemClick = (val: string) => {
    if (activeFilter === val) {
      setActiveFilter("");
    } else {
      setActiveFilter(val);
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((res: Categories[]) => {
        //console.log(res);
        res.sort((a, b) => {
          return a.order - b.order;
        });
        setData(res.filter((a) => a.order > 0));
      });

    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((res: Product[]) => {
        // setProduct(res);
        setFilteredProduct(res);
        dispatch(MainCart(res));
      });
  }, [dispatch]);

  useEffect(() => {
    if (activeFilter.length > 0)
      setFilteredProduct(
        mainCart.filter((a: Product) => a.category === activeFilter)
      );
    else setFilteredProduct(mainCart);
  }, [activeFilter, mainCart]);

  const content = (
    <div className="product">
      <nav className="sidebar">
        <ul>
          {data.map((category, i) => {
            return (
              <Sidebar
                key={i}
                onClick={() => listItemClick(category.id)}
                category={category}
              />
            );
          })}
        </ul>
      </nav>
      <main className="product-view">
        <section className="product-section">
          {filteredProduct.map((item, i) => (
            <ProductList
              item={item}
              key={item.id}
              onClick={() => addtocart(item.id)}
            />
          ))}
        </section>
      </main>
    </div>
  );

  return size === false ? content : <></>;
}
