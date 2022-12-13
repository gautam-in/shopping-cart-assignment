import { useEffect, type FunctionComponent } from "react";
import { useNavigate } from "react-router-dom"
import { MetaInfo } from "../../components";
import { getRouteMetaInfo } from "../../config/routes.config";
import { getAllProductsByCategories } from "src/store/slices/products";
import { useSelector, useDispatch } from "react-redux";
import { type RootState, type AppDispatch } from "../../store";

const Banners: FunctionComponent = () => {
  const categories = useSelector(
    (state: RootState) => state.Products.entities.categories || []
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchApiDetails();
  }, []);

  const fetchApiDetails = async () => {
    await dispatch(getAllProductsByCategories("categories"));
  };

  const handlecategories = (id: string) => {
    navigate(`/products?id=${id}`)
  }
  return (
    <div className="banners">
      <MetaInfo {...getRouteMetaInfo("Banners")} />
      {categories.length > 0 &&
        categories.map((item: any) => {
          let imagePath = item.imageUrl;
          if (imagePath === undefined) return "";
          return (
            <div className="banner" key={item?.id}>
              <img
                src={
                  imagePath
                    ? require(`src/containers${imagePath}`)
                    : require(`src/containers/static/images/category/baby.png`)
                }
                alt={item?.name}
                className="banner__img"
              />
              <div className="banner__details">
                <h3 className="heading-3">{item?.name}</h3>
                <p className="paragraph paragraph--p1">
                  {item?.description} 
                </p>
                <button className="btn btn--explore" onClick={() => handlecategories(item?.id)}>Explore {item?.name}</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Banners;
