import { productAction } from "@/store/products-slice";
import React from "react";
import useSWR, { Fetcher } from "swr";
import { useSelector, useDispatch } from "react-redux";
import {
  filterAction,
  filterProductCategory,
} from "./../../../store/filter-slice";

const navData = [
  {
    name: "Fruits and Vegetables",
    category: "5b6899953d1a866534f516e2",
  },
  {
    name: "Bakery Cakes and Dairy",
    category: "5b6899123d1a866534f516de",
  },
  {
    name: "Beverages",
    category: "5b675e5e5936635728f9fc30",
  },
  {
    name: "Beauty and Hygiene",
    category: "5b68994e3d1a866534f516df",
  },
  {
    name: "Baby Care",
    category: "5b6899683d1a866534f516e0",
  },
];

function Navbar() {
  console.log("Navbar Component loaded ...");
  let productData = useSelector((state: any) => state.product);
  console.log("ProductData from store : ", productData);
  const dispatcher = useDispatch();
  const fetcher = (url: any) =>
    fetch(url)
      .then((res) => res.json())
      .then((res) => JSON.parse(res));
  const { data, error } = useSWR(
    "/api/staticdata?param=server/products",
    fetcher
  );

  const filterProducts = ({ category }: any) => {
    if (data) {
      dispatcher(productAction.setProductState(data));
      dispatcher(filterAction.filterProductCategory("-"));
      console.log("Going to set product data to store ");
    }

    let filteredProducts = data.filter(
      (entry: any) => entry.category === category
    );
    console.log(filteredProducts, " filteredProducts ");
    //  dispatcher(productAction.filterProductState(category));
    dispatcher(filterAction.filterProductCategory(category));
    dispatcher(productAction.setProductState(filteredProducts));
  };

  return (
    <div className="w-[25%] h-[100vh] bg-[#ddd]">
      <aside className="">
        <div className="flex flex-col text-[#4d4d4d] text-base">
          {navData &&
            navData.map((entry: any) => {
              return (
                <div className="py-2 pl-2 border-gray-600 border-b border-solid">
                  <button className="" onClick={() => filterProducts(entry)}>
                    {entry.name}
                  </button>
                </div>
              );
            })}
        </div>
      </aside>
    </div>
  );
}

export default Navbar;
