import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartData } from "../../Redux/Reducers/cartSlice";
import { selectItems } from "../../Redux/Reducers/productsSlice";

const Products = ({ action }) => {
  const dispatch = useDispatch();
  const products = useSelector(selectItems);
  const [filterByCategory, setFilterByCategory] = useState([]);
  useEffect(() => {
    if (!action.action) {
      setFilterByCategory(products);
    } else {
      const data = products.filter((item) => item.category === action.action);
      setFilterByCategory(data);
    }
  }, [action, products]);
  const addToCartHandler = (id) => {
    dispatch(addToCartData({ id: id, qty: 1 }));
  };

  return (
    <>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 sm:pl-2 sm:pt-4 pt-0 sm:grid-cols-1 ">
        {filterByCategory?.map((item) => {
          return (
            <section key={item.id}>
              <div className="flex flex-col justify-center items-center sm:ml-2 pb-5">
                <h1 className="text-left sm:h-20 w-72 pr-3  pl-3 font-medium ">
                  {item.name}
                </h1>
                <div className="flex flex-row bg-light items-center">
                  <img
                    src={item.imageURL}
                    width={150}
                    height={150}
                    alt="name"
                  ></img>
                  <p className="text-xs w-28 h-32 overflow-hidden ">
                    {item.description}
                  </p>
                </div>
                <button
                  onClick={() => {
                    addToCartHandler(item.id);
                  }}
                  className="bg-rose-600 w-64 sm:h-11 mt-1 h-8 text-white hover:bg-rose-700 "
                >
                  ADD TO CART
                </button>
                <div className="border-b-2  w-64 pt-2 border-dotted border-gray-300"></div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Products;
