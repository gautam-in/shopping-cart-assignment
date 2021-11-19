import {
  AllProductsStyles,
  SideNavStyles,
  ProductsSectionStyles,
} from "./styles/allproducts";
import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import SideNav from "./SideNav";
import { CartContext } from "../store/cart-context";

export default function Category(props) {
  const [category, setCategory] = useState([]);
  const [categoryLinks, setCategoryLinks] = useState([]);
  const params = useParams();
  const { catId } = params;

  const ctx = useContext(CartContext);
  //console.log(ctx);
  //console.log(category);

  useEffect(() => {
    LoadProducts();
    // if (!!localStorage.getItem('items')) {
    //   const storedCart = JSON.parse(localStorage.getItem('items'));
    //   console.log("entered");
    //   ctx.items = storedCart;
    // }
  }, [catId]);

  const LoadProducts = async () => {
    await axios.get("http://localhost:8888/products").then((res) => {
      const carlist = new Set();
      res.data.map((item) => carlist.add(item.category));
      setCategoryLinks((prev) => [...carlist]);
      if (catId) {
        setCategory(filterhandler(catId, res.data));
      } else setCategory(res.data);
    });
  };

  const filterhandler = (catId, data) => {
    let filteredCategory = data;
    filteredCategory = data?.filter((item) => item.category === catId);
    return filteredCategory;
  };

  const addToCartHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  return (
    <AllProductsStyles>
      <SideNavStyles>
        <SideNav categoryLinks={categoryLinks} />
      </SideNavStyles>
      <ProductsSectionStyles>
        {category?.map((item) => (
          <div key={item.id} className="singleItem">
            <h3 className="itemHead">{item.name}</h3>
            <img src={item.imageURL} alt={item.sku} />
            <p className="itemDescription">{item.description}</p>
            <p className="itemButs">
              <span>Mrp Rs.{item.price}</span>
              <button onClick={addToCartHandler.bind(this, item)}>
                BUYNOW
              </button>
            </p>
          </div>
        ))}
      </ProductsSectionStyles>
    </AllProductsStyles>
  );
}
