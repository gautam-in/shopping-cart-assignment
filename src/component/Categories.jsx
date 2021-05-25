import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCategory } from "../redux/category/actionCreator";
function Categories() {
  const categoryData = useSelector((state) => state.getCatDetail.category);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const routeTo = (catid) => {
    history.push("/product#" + catid);
  };
  return (
    <>
      {categoryData.map(
        (data) =>
          data.enabled && (
            <div key={data.key} className="app-category app-bottom-shadow">
              <img
                src={data.imageUrl}
                alt={data.name}
                loading="lazy"
                width="300"
                height="185"
              ></img>
              <div className="cat-desc centre">
                <h3>
                  <b>{data.name}</b>
                </h3>
                <p>{data.description}</p>
                <button
                  className="app-btn"
                  onClick={routeTo.bind(null, data.id)}
                  catid={data.id}
                >
                  Explore {data.name}
                </button>
              </div>
            </div>
          )
      )}
    </>
  );
}

export default React.memo(Categories);
