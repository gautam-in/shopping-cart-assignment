import React from "react";
import Button from "../Button/Button";
import instance from "../../axios-instance";
import { useHistory } from "react-router";

const Banner = () => {
  const [categories, setCats] = React.useState([]);
  const history = useHistory();
  React.useEffect(() => {
    instance
      .get("/categories")
      .then(function (response) {
        const { data } = response;
        const respData = data
          .filter((item) => item.enabled)
          .sort((a, b) => a.order - b.order);

        setCats(respData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleCategory = (e) => {
    history.push("products#" + e.target.id);
  };

  return (
    <>
      {categories &&
        categories.length > 0 &&
        categories.map((banner, i) => (
          <div
            key={banner.id}
            className="row shadow-row row-direction"
          >
            <div className="col-md-6 banner-img">
              <img
                className="banner-img-fluid"
                src={banner.imageUrl}
                alt={banner.name}
              />
            </div>
            <div className="col-md-6 flex-center">
              <div className="space text-center">
                <h4 className="title-xl">{banner.name}</h4>
                <p className="title line-clamp-2">{banner.description}</p>
                <Button
                  variant="primary"
                  onClick={handleCategory}
                  id={banner.id}
                >{`Explore ${banner.name}`}</Button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Banner;
