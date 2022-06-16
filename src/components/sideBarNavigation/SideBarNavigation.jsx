import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectItems } from "../../Redux/Reducers/categorySlice";

const SideBarNavigation = ({ id }) => {
  const categoryData = useSelector(selectItems);
  const [showDropdown, setShowDropdown] = useState(false);
  const [name, setName] = useState(undefined);
  useEffect(() => {
    const selectedItem = categoryData?.find((item) => {
      return item.id === id;
    });
    if (selectedItem) {
      setName(selectedItem.name);
    }
  }, [id, categoryData]);
  const handleDropdownChange = (id) => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
      <div className="sticky top-16">
        <div className="relative  sm:hidden">
          <div>
            <button
              type="button"
              className="inline-flex  bg-rose-600 text-white h-9 justify-center  items-center w-full text-center"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={handleDropdownChange}
            >
              {name ? name : "Select Product Type"}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {showDropdown && (
            <div
              className="origin-top-right bg-rose-600 text-white absolute right-0 mt-2 w-full focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              {categoryData?.map((item, index) => {
                return (
                  <NavLink
                    key={item.id + index}
                    onClick={handleDropdownChange}
                    aria-label="Link"
                    className={(navData) =>
                      navData.isActive
                        ? "text-center cursor-pointer text-blue-400"
                        : "text-center cursor-pointer"
                    }
                    to={`/products/${item.id}`}
                  >
                    <div className="flex w-full h-full  items-center justify-center cursor-pointer">
                      <label className="text-lg  text-gray hover:text-blue-400 cursor-pointer p-2">
                        Explore {item.name}
                      </label>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          )}
        </div>
        <div className=" sm:block hidden">
          {categoryData?.map((item, index) => {
            return (
              <NavLink
                key={item.id + index}
                aria-label="Link"
                className={(navData) =>
                  navData.isActive
                    ? "text-center cursor-pointer focus:text-blue-400 active"
                    : "text-center cursor-pointer"
                }
                to={`/products/${item.id}`}
              >
                <div className="flex w-full h-full flex-col items-center justify-center ">
                  <p className="text-lg  text-gray hover:text-blue-400  inline-block py-3">
                    {item.name}
                  </p>
                  <div className="border-b-2 w-full border-gray-300"></div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideBarNavigation;
