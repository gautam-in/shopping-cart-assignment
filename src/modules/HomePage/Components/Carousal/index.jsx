import React, { useState } from "react";
import "./carousal.scss";
import { useQuery } from "react-query";
import axios from "axios";

const Carousal = () => {
  const [active, setActive] = useState();
  // Queries
  const { isLoading, isError, data } = useQuery("offers", async () => {
    const { data } = await axios.get("http://localhost:5000/banners");
    data.sort((a, b) => (a.order < b.order ? -1 : 1));
    setActive(data?.length && data[0].id);
    return data;
  });

  if (isLoading) return <p>Loading ...</p>;
  if (isError) return <p>Something went wrong ...</p>;

  return (
    <section className="carousal">
      {data.map(({ bannerImageUrl, bannerImageAlt, id }, i) => (
        <img
          key={id}
          src={bannerImageUrl}
          className={`offerImg ${active === id && "visible"}`}
          alt={bannerImageAlt}
        />
      ))}
      <button
        className="prevButton"
        onClick={() => {
          const i = data.findIndex(({ id }) => id === active);
          setActive(data[i === 0 ? data.length - 1 : i - 1].id);
        }}
      >
        PREV
      </button>
      <button
        className="nextButton"
        onClick={() => {
          const i = data.findIndex(({ id }) => id === active);
          setActive(data[i === data.length - 1 ? 0 : i + 1].id);
        }}
      >
        NEXT
      </button>
      <div className="dots">
        {data.map(({ id }) => (
          <span
            key={id}
            className={`dot ${active === id && "active"}`}
            onClick={() => setActive(id)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Carousal;
