import React from "react";
import { withRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import './App.css';


function Products(props) {
  const { id } = useParams();

  let noOfProducts = false;

  return (

    <div style={{ textAlign: "center" }}>
      <h1>Welcome To Products Page</h1>

      {id === 'AllProducts' ? <h1>All Available Products</h1> : null}

      {id === 'AllProducts' ? props.state.store.products.map((item, i) => {
        return (
          <div className="products">
            <h2>{item.name}</h2><br />
            <h3>$ {item.price}</h3><br />
            <p>{item.description}</p><br />
            {/* <img src={ i===0 ? product1 : product2} /> */}
            <img src={window.location.origin + `/${item.imageURL}`} />
            <br />
            <button onClick={() => alert("Product Added To Cart!!")} >Add to cart</button>
          </div>
        );
      }
      )
        : null}




      {props.state.store.products.map((item, i) => {

        if (item.category == id) {
          noOfProducts = true
          return (
            <div className="products">
              <h2>{item.name}</h2><br />
              <h3>$ {item.price}</h3><br />
              <p>{item.description}</p><br />
              {/* <img src={ i===0 ? product1 : product2} /> */}
              <img src={window.location.origin + `/${item.imageURL}`} />
              <br />
              <button onClick={() => alert("Product Added To Cart!!")} >Add to cart</button>
            </div>
          );
        }
        else return null
      })}

      {id !== 'AllProducts' && !noOfProducts ? <h1>No Products!!</h1> : null}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    state: state
  };

}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Products);