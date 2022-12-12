import { useEffect, useState, type FunctionComponent } from "react";
import { MetaInfo } from "../../components";
import { getRouteMetaInfo } from "../../config/routes.config";
import { useSelector, useDispatch } from "react-redux";
import { type RootState, type AppDispatch } from "../../store";
import { getAllProductsByCategories, filterby } from "../../store/slices/products";

const Products: FunctionComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeElement, setActiveElement] = useState("0");

  const allProducts = useSelector(
    (state: RootState) => state.Products.entities.products || []
  );

  const filteredProducts = useSelector(
    (state: RootState) => state.Products.entities.filtered || []
  );

  useEffect(() => {
    fetchApiDetails();
  }, []);

  const fetchApiDetails = async () => {
    await dispatch(getAllProductsByCategories("products"));
  };

  const handleFilters = (item: string, filterKey: string) => {
    setActiveElement(item);
    dispatch(filterby(filterKey));
  }

  return (
    <div className="product-content">
      <MetaInfo {...getRouteMetaInfo("Products")} />
      <nav className="product-nav">
        <ul className="side-nav">
        <li
            onClick={() => handleFilters("0", "0")}
            key="nav-0"
            className={`side-nav__item  ${
              activeElement === "0" && "side-nav__item--active"
            }`}
          >
            <a href="#" onClick={(e) => e.preventDefault()} role="button" className="side-nav__link">
              {" "}
              All Products{" "}
            </a>
          </li>
          <li
            onClick={() => handleFilters("1", "5b6899953d1a866534f516e2")}
            key="nav-1"
            className={`side-nav__item  ${
              activeElement === "1" && "side-nav__item--active"
            }`}
          >
            <a href="#" onClick={(e) => e.preventDefault()} role="button" className="side-nav__link">
              {" "}
              Fruits & vegetables{" "}
            </a>
          </li>
          <li
            onClick={() => handleFilters("2", "5b6899123d1a866534f516de")}
            key="nav-2"
            className={`side-nav__item  ${
              activeElement === "2" && "side-nav__item--active"
            }`}
          >
            <a href="#" onClick={(e) => e.preventDefault()} role="button" className="side-nav__link">
              {" "}
              Bakery cakes and Dairy{" "}
            </a>
          </li>
          <li
            onClick={() => handleFilters("3", "5b675e5e5936635728f9fc30")}
            key="nav-3"
            className={`side-nav__item  ${
              activeElement === "3" && "side-nav__item--active"
            }`}
          >
            <a href="#" onClick={(e) => e.preventDefault()} role="button" className="side-nav__link">
              {" "}
              Beverages{" "}
            </a>
          </li>
          <li
            onClick={() => handleFilters("4", "5b68994e3d1a866534f516df")}
            key="nav-4"
            className={`side-nav__item  ${
              activeElement === "4" && "side-nav__item--active"
            }`}
          >
            <a href="#" onClick={(e) => e.preventDefault()} role="button" className="side-nav__link">
              {" "}
              Beauty and Hygiene{" "}
            </a>
          </li>
          <li
            onClick={() => handleFilters("5", "5b6899683d1a866534f516e0")}
            key="nav-5"
            className={`side-nav__item  ${
              activeElement === "5" && "side-nav__item--active"
            }`}
          >
            <a href="#" onClick={(e) => e.preventDefault()} role="button" className="side-nav__link">
              {" "}
              Baby care{" "}
            </a>
          </li>
        </ul>

        <select>
          <option value="1" key="1">
            Fruits & vegetables
          </option>
          <option value="2" key="2">
            Bakery cakes and Dairy
          </option>
          <option value="3" key="3">
            Beverages
          </option>
          <option value="4" key="4">
            Beauty and Hygiene
          </option>
          <option value="5" key="5">
            Baby care
          </option>
        </select>
      </nav>
      <div className="products">
        {[...(filteredProducts.length ? filteredProducts : allProducts)]?.map((item: any, i: number) => {
          return (
            <div className="card product" key={`card-${i}`}>
              <h4 className="heading-4 product__heading">{item?.name}</h4>
              <img
                src={require(`.${item?.imageURL}`)}
                alt={item?.name}
                className="product__img"
              />
              <p className="product__desc">{item.description}</p>
              <div className="product__cost">MRP ${item?.price}</div>
              <button className="product__btn btn btn--explore">
                Buy Now <span className="product__btn--cost">@$20</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
