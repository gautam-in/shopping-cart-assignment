import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Sidebar } from "../../components/basic";
import { MyGlobalContext } from "../../context/myGLobalContext";
import { useFirstRender } from "../../hooks";

export type ProductsData = {
  name: string;
  imageURL: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  sku: string;
  id: string;
};

const Products: React.FC = () => {
  const query = useLocation();
  const id = new URLSearchParams(query.search).get("id");
  const location = useLocation();
  const navigate = useNavigate();

  const {
    categoriesData,
    setCategoriesData,
    productsData,
    setAllProductsData,
    cartData,
    setCartData,
  } = React.useContext(MyGlobalContext);
  const [activeElement, setActiveElement] = React.useState<string>("0");
  const [filteredProductsData, setFilteredProducsData] = React.useState(
    [] as ProductsData[]
  );

  const getAllCategories = async () => {
    await fetch(`http://localhost:5000/categories`)
      .then(async (response) => {
        let categoriesData = await response.json();
        categoriesData = categoriesData.sort(
          (a: { order: number }, b: { order: number }) => a.order - b.order
        );
        setCategoriesData(categoriesData);
      })
      .catch((error) => {
        throw error;
      });
  };

  const getAllProducts = async () => {
    await fetch(`http://localhost:5000/products`)
      .then(async (response) => {
        let productsData = await response.json();
        setAllProductsData(productsData);
      })
      .catch((error) => {
        throw error;
      });
  };

  const handleFilters = (filterKey: string) => {
    let temp = [...productsData];

    if (filterKey !== "0") {
      temp = productsData?.filter(
        (data: ProductsData) => data?.category === filterKey
      );
      navigate(`${location.pathname}?id=${filterKey}`, { replace: true });
    }
    setActiveElement(filterKey);
    setFilteredProducsData(temp);
  };

  const handleAddToCart = (id: string) => {
    const index = productsData.findIndex((obj) => obj?.id === id);
    productsData[index].stock -= 1;
    const tempData = productsData?.filter((data) => data.id === id)[0];
    const selectedProduct = { ...tempData, quantity: 1 };
    setCartData([...cartData, selectedProduct]);
  };

  useFirstRender(() => {
    getAllProducts();
    getAllCategories();
  }, []);

  React.useEffect(() => {
    let temp = [...productsData];
    if (id) {
      setActiveElement(id);

      temp = productsData.filter((data: ProductsData) => data?.category === id);
    }
    setFilteredProducsData(temp);
  }, [productsData]);

  return (
    <div className="product-content">
      <Sidebar
        data={categoriesData}
        activeMenu={activeElement}
        menuClickHandler={handleFilters}
      />
      <div className="products">
        {[
          ...(filteredProductsData.length
            ? filteredProductsData
            : productsData),
        ]?.map((item: ProductsData, i: number) => {
          let imagePath: string[] =
            item.imageURL !== undefined ? item.imageURL.split("/") : [];
          let imageName =
            imagePath[imagePath?.length - 2] +
            "/" +
            imagePath[imagePath?.length - 1];
          const isAddedToCart =
            cartData?.filter((data) => data?.id === item?.id)?.length > 0 &&
            item?.stock > 0;
          return (
            <div className="card product" key={`card-${i}`}>
              <h4 className="heading-4 product__heading">{item?.name}</h4>
              <img
                src={require(`../../static/images/products/${imageName}`)}
                alt={item?.name}
                className="product__img"
              />
              <div className="product__footer">
                <div className="product__desc">{item.description}</div>
                <div className="product__price">
                  <div className="product__cost">MRP Rs.{item?.price}</div>
                  <button
                    className="product__btn btn btn--explore"
                    disabled={item.stock <= 0}
                    onClick={() =>
                      !isAddedToCart &&
                      item.stock > 0 &&
                      handleAddToCart(item?.id)
                    }
                  >
                    {isAddedToCart ? (
                      "Added to Cart"
                    ) : item.stock > 0 ? (
                      <>
                        Buy Now{" "}
                        <span className="product__btn--cost">
                          @ Rs.{item?.price}
                        </span>
                      </>
                    ) : (
                      <>Out of stock</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
