import React, { useEffect } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "@/store/cart-slice";

interface OfferCardData {
  bannerImageUrl: string;
  bannerImageAlt: string;
  isActive: boolean;
  order: number;
  id: string;
}

const ProductsCard = ({ productData }: any) => {
  // useEffect(() => {
  //   // if (productData) {
  //   //   console.log("productData.length ", productData.length);
  //   //   productData &&
  //   //     productData.map((entry: any) => {
  //   //       console.log("entry ", entry);
  //   //     });
  //   // }
  // }, [productData]);

  const dispatcher = useDispatch();
  const addToCart = (entry: any) => {
    console.log("Add To Cart ", entry);
    dispatcher(cartAction.setCartState(entry));
  };

  // console.log("productData ", productData);

  return (
    <>
      {productData &&
        productData.map((entry: any) => {
          return (
            <div
              key={entry.id}
              className="lg:w-[30%] md:w-[30%] sm:w-[25%] xs:w-[100%] border-b-2"
            >
              <div className="flex flex-col tex justify-center content-center">
                <h1 className="h-20  text-base font-bold py-2">
                  {" "}
                  {entry.name}{" "}
                </h1>
                <Image
                  className="self-center"
                  src={entry.imageURL}
                  alt=""
                  width="150"
                  height="150"
                />
                <div className="">
                  <p className="overflow-hidden h-16 my-4 text-sm p-1 overflow-ellipsis bg-gray-200">
                    {entry.description}
                  </p>
                  <div className="flex justify-between items-center py-4">
                    <p> MRP Rs. {entry.price}</p>
                    <button
                      onClick={() => addToCart(entry)}
                      className="block text-center rounded-sm px-4 py-1 bg-[#d42559] text-white"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ProductsCard;
