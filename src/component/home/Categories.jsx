import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../../redux/category/actionCreator";

function Categories() {
  const categoryData = useSelector((state) => state.getCatDetail.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <>
      {categoryData.map(
        (data) =>
          data.enabled && (
            <div
              key={data.key}
              id="main"
              className="app-category app-bottom-shadow"
            >
              <img
                src={data.imageUrl}
                alt={data.name}
                loading="lazy"
                width="300"
                height="185"
              ></img>
              <div className="cat-desc centre">
                <h2>
                  <b>{data.name}</b>
                </h2>
                <h3>{data.description}</h3>
                <a className="app-btn" href={`/product#${data.id}`}>
                  Explore {data.name}
                </a>
              </div>
            </div>
          )
      )}
    </>
  );
}

export default React.memo(Categories);
