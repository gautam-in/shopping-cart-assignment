import React from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/actions";
import CustomButton from "./aButton";

const CollItems = ({ items, addItem }) => {
  return (
    <div className="coll-prew">
      {items.map((item) => (
        <div key={item.id}>
          <div>
            <img src={item.imageUrl} alt="" />
            <span>{item.name}</span>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <strong>MRP Rs. </strong>
              {item.price}
            </div>
            <div className="col-sm-6">
              <CustomButton onClick={() => addItem(item)} inverted>
                Add to cart
              </CustomButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollItems);
