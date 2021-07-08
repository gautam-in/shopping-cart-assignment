import React from "react";
import { connect } from "react-redux";
import { addtocart } from "../../redux/Cart/cartactions";
import Eachproduct from "../Eachproduct/Eachproduct";
import "./Products.scss";
function Products(props) {
  console.log(props, "productsss");
  return (
    <>
      {props.products.length ? (
        <div className="allproducts">
          {props.products.map((element) => (
            <Eachproduct
              product={element}
              key={element.id}
              addtocart={() => props.addtoCart(element)}
            />
          ))}
        </div>
      ) : (
        <h1>No items available</h1>
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addtoCart: (element) => dispatch(addtocart(element)),
  };
};

export default connect(null, mapDispatchToProps)(Products);
