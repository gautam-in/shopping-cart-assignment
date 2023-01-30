import React, { useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    }
  }, []);

  return visible ? (
    <div className="container">
      <button className="button">
        <div onClick={scrollToTop} className="upArrow">
          {">"}
        </div>
      </button>
    </div>
  ) : (
    <></>
  );
};

export default ScrollToTopButton;
