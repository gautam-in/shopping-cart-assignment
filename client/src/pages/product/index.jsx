import React, { useState, useEffect, Suspense, lazy } from "react";
import { connect } from "react-redux";
import { detectDevice } from "../../commonFunctions/detectDevice";
import { useParams } from "react-router-dom";

import "./styles.scss";

const Footer = lazy(() => import("../../components/footer/footer.componets"));
const ListBlock = lazy(() =>
  import("../../components/listblock/listblock.component")
);
const NavBar = lazy(() => import("../../components/navbar/navbar.component"));
const Sidebar = lazy(() =>
  import("../../components/sidebar/sidebar.component")
);
const Button = lazy(() => import("../../components/button/button.component"));

const ProductPage = (props) => {
  const style = {
      marginTop: "10px",
      marginBottom: "10px",
      padding: "10px",
      width: "100%",
      backgroundColor: "#a51309",
      color: "#fff",
    },
    mobileListBlockStyle = {
      width: "100%",
      marginLeft: 0,
    },
    webListBlockStyle = {
      display: "flex",
      flexWrap: "wrap",
      width: "75%",
      marginLeft: "25%",
      padding: "10px",
    },
    tabletListBlockStyle = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      width: "80%",
      marginLeft: "20%",
      padding: "10px",
    };

  const [selectedData, setSelectedDataFn] = useState([]);
  const [categories, setCategoryFn] = useState([]);
  const params = useParams();

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:5000/products"),
      fetch("http://localhost:5000/categories"),
    ])
      .then((responses) => {
        return Promise.all(
          responses.map(function (response) {
            return response.json();
          })
        );
      })
      .then((data) => {
        setCategoryFn(data[1]);
        if (typeof params.productname !== "undefined") {
          let selected = data[1].find((i) => i.key === params.productname),
            nData = data[0].filter((i) => i.category === selected.id);
          nData = addKey(nData);
          setSelectedDataFn(nData);
        } else {
          let nData = addKey(data[0]);
          setSelectedDataFn(nData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.productname]);

  const addKey = (data) => {
    let nData = [...data];
    data.map((list, idx) => {
      nData[idx].updatePrice = list.price;
      nData[idx].qty = 1;
    });

    return nData;
  };

  const renderData = () => {
    const items = selectedData.map((list, idx) => (
      <div className="products__card" key={idx}>
        <h3>{list.name}</h3>
        <article>
          <img src={list.imageURL} alt={list.name} />
          <section>
            <p>{list.description}</p>
            <div className="products__card__price">
              <Button
                type="submit"
                width="100%"
                handleClick={() => props.addToCartFn(list)}
              >
                Buy Now{" "}
                <span className="products__button--display">
                  @ Rs. {list.price}
                </span>
              </Button>
            </div>
          </section>
        </article>
        <section className="products__footer">
          <div className="products__footer--display">MRP Rs.{list.price}</div>
          <Button
            type="submit"
            width={
              detectDevice("mobile") || detectDevice("tablet") ? "100%" : "50%"
            }
            handleClick={() => props.addToCartFn(list)}
          >
            Buy Now{" "}
            <span className="products__button--display">
              @ Rs. {list.price}
            </span>
          </Button>
        </section>
      </div>
    ));

    return items;
  };

  const mediaQueryCheck = () => {
    if (detectDevice("mobile")) {
      return mobileListBlockStyle;
    }

    if (detectDevice("tablet")) {
      return tabletListBlockStyle;
    }

    return webListBlockStyle;
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <main className="product-container">
        <Sidebar
          data={categories}
          style={style}
          activeClass="#c93131"
          key="productname"
        />
        <ListBlock style={mediaQueryCheck()}>{renderData()}</ListBlock>
      </main>
      <Footer />
    </Suspense>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToState = (dispatch) => {
  return {
    addToCartFn: (itemSelected) =>
      dispatch({
        type: "ADD_TO_CART_ITEM_DATA_ACTION",
        itemSelected: itemSelected,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(ProductPage);
