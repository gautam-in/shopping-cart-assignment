import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosAPI from "../api/axiosAPI";
import SlidingImages from "../components/slidingComponent/SlidingImages.js";
import { selectItems } from "../Redux/Reducers/categorySlice";

const HomePage = () => {
  const categoryData = useSelector(selectItems);
  const [bannerData, setBannerData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location?.state?.login) {
      toast.success(location?.state?.login);
      navigate(location.pathname, { replace: true });
    }
  }, [location?.state?.login]);

  useEffect(() => {
    const getBannerData = async () => {
      const res = await axiosAPI.banner.get();
      setBannerData(res.data);
    };
    getBannerData();
  }, []);

  return (
    <>
      <div>
        <SlidingImages categoryData={bannerData}></SlidingImages>
      </div>

      {categoryData.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <div
              key={item.id + index}
              className="flex flex-row shadow-md mt-6 justify-center items-center"
            >
              <div className="p-7">
                <img height={350} width={300} src={item.imageUrl} alt="/"></img>
              </div>
              <div className="pr-3 flex-col flex self-center justify-center items-center flex-grow">
                <h1 className="font-medium">{item.name}</h1>
                <p className="text-xs">{item.description}</p>
                <Link
                  aria-label="Link"
                  to={`/products/${item.id}`}
                  className="bg-rose-600 text-sm w-full xl:w-52 sm:w-1/2 cursor-pointer  text-white h-9 mt-2 align-middle hover:bg-rose-700 text-center"
                >
                  <div className="flex w-full h-full  items-center justify-center ">
                    <label className=" flex-grow cursor-pointer">
                      Explore {item.name}
                    </label>
                  </div>
                </Link>
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={item.id + index}
              className="flex flex-row shadow-md mt-6 justify-center items-center"
            >
              <div className="pr-3 flex-col flex self-center justify-center items-center flex-grow">
                <h1 className="font-medium">{item.name}</h1>
                <p className="text-xs">{item.description}</p>
                <Link
                  aria-label="Link"
                  to={`/products/${item.id}`}
                  className="bg-rose-600 text-sm w-full xl:w-52 sm:w-1/2 cursor-pointer  text-white h-9 mt-2 hover:bg-rose-700 text-center"
                >
                  <div className="flex w-full h-full cursor-pointer items-center justify-center ">
                    <label className="cursor-pointer flex-grow">
                      Explore {item.name}
                    </label>
                  </div>
                </Link>
              </div>
              <div className="p-7">
                <img height={350} width={300} src={item.imageUrl} alt="/"></img>
              </div>
            </div>
          );
        }
      })}
      <p className="text-center w-full h-10 mt-2 pt-2 bg-gray-200 text-black ">
        Copyright@ 2018-2018 Sabka Bazaar Supplies Pvt Ltd
      </p>
      <ToastContainer />
    </>
  );
};

export default HomePage;
