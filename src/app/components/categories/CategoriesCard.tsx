import React, { useEffect } from "react";
import Image from "next/image";
import { reverse } from "dns";

interface OfferCardData {
  bannerImageUrl: string;
  bannerImageAlt: string;
  isActive: boolean;
  order: number;
  id: string;
}

const CategoriesCard = ({ offerData }: any) => {
  useEffect(() => {
    console.log(" offerData ", offerData);
  }, [offerData]);

  return (
    <>
      {offerData &&
        offerData.map((entry: any, index: any) => {
          return entry.enabled ? (
            <div className="container" key={entry.id}>
              <div
                className="py-5 shadow-[0px_30px_20px_-30px_#a19f9f] flex flex-nowrap"
                style={{
                  flexDirection: index % 2 == 1 ? "row-reverse" : "row",
                }}
              >
                <div className="flex-1">
                  <div className="flex flex-col  justify-center items-center text-center">
                    <h1 className="text-base font-bold py-2"> {entry.name} </h1>
                    <p className="text-sm pb-4">{entry.description}</p>
                    <button className="py-1 px-3 rounded text-center mb-3 block bg-[#d42559] text-white">
                      {entry.key}
                    </button>
                  </div>
                </div>
                {/* <div style={{ order: index % 2 == 0 ? 1 : 0 }}> */}
                <Image src={entry.imageUrl} alt="" width="200" height="200" />
                {/* </div> */}
              </div>
            </div>
          ) : (
            <></>
          );
        })}
    </>
  );
};

export default CategoriesCard;
