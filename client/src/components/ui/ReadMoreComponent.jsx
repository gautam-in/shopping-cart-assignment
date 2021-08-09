import React, { useState } from "react";

function ReadMoreComponent({ children }) {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p
      style={{
        backgroundColor: "#eaeaea",
        padding: "10px",
        fontWeight: "bold",
      }}
    >
      {isReadMore ? text.slice(0, 100) : text}
      <span
        onClick={toggleReadMore}
        style={{ color: "#d00155",cursor:"pointer" }}
      >
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
}

export default ReadMoreComponent;
