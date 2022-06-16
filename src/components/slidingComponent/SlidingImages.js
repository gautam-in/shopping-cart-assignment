import React, { useEffect, useState } from "react";
const SlidingImages = ({ categoryData }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    if (categoryData?.length > 0) {
      const interval = setInterval(() => {
        if (slideIndex !== categoryData?.length) {
          setSlideIndex(slideIndex + 1);
        } else if (slideIndex === categoryData?.length) {
          setSlideIndex(1);
        }
      }, 3000);
      return () => {
        clearInterval(interval);
      };
    }
  });

  const nextSlide = () => {
    if (slideIndex !== categoryData?.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === categoryData?.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(categoryData?.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <>
      {categoryData?.length > 0 && (
        <div className="relative shadow-md ">
          <div className="overflow-hidden relative h-48 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
            {categoryData.map((item, index) => {
              return (
                <div
                  key={item.id + index}
                  className={`duration-700 ease-in-out absolute inset-0  ${
                    slideIndex === index + 1 ? "opacity-100" : "opacity-0"
                  } transition-all transform translate-x-0 z-20`}
                >
                  <img
                    src={item.bannerImageUrl}
                    className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                </div>
              );
            })}
          </div>

          <div className="flex absolute bottom-9 xl:bottom-9 md:bottom-9 sm:bottom-14 left-1/2 z-30 space-x-3 -translate-x-1/2">
            {Array.from({ length: categoryData?.length }).map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => moveDot(index + 1)}
                  className={`h-3 w-3 rounded-full  ${
                    slideIndex === index + 1 ? "bg-red-600" : "bg-gray-700"
                  }`}
                ></div>
              );
            })}
          </div>

          <button
            type="button"
            aria-label="prevSlide"
            onClick={prevSlide}
            className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-red-700    group-focus:outline-none">
              <svg
                className="w-5 h-5 text-orange-400 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="hidden">Previous</span>
            </span>
          </button>
          <button
            type="button"
            aria-label="nextSlide"
            className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            onClick={nextSlide}
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-red-700    group-focus:outline-none">
              <svg
                className="w-5 h-5 text-orange-400 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="hidden">Next</span>
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default SlidingImages;
