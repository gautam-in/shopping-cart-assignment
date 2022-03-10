import React from "react"
import { Link } from "react-router-dom";
import CartIcon from "../Mini-Cart/cartIcon";
import { connect } from "react-redux";
import "./Navbar.css"

class Navbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      toggle: false
    }
  }


  handleClick = event => {
    event.preventDefault()
    this.setState({ toggle: true })
  }

  closeModal = () => {
    this.setState({ toggle: false });
  }


  render() {
    return (
      <>
        <div className="skip">
          <Link className="main-link" to={"/Products"}>Skip to main content</Link>
        </div>
        <header tabIndex={"0"}>
          <nav className="flex-container-nav">
            <div className="image-links">
              <div className="logo-img">
                <img className="logo-size" aria-label="Sabka bazaar logo" tabIndex={"0"} src={"static/images/logo_2x.png"} alt={"Logo"} />
              </div>
              <div className="left-links">
                <Link aria-label="Home Tab" className="hyper-link" to={"HomePage"}>Home</Link>
                <Link aria-label="Products Tab" className="hyper-link" to={"Products"} >Products</Link>
              </div>
            </div>
            <div className="btns-links">
              <div className="right-links">
                <Link aria-label="SignIn Tab" className="hyper-link" to={"Login"} >SignIn</Link>
                <Link aria-label="Register Tab" className="hyper-link" to={"Register"} >Register</Link>
              </div>
              <div tabIndex={"0"} aria-label="Cart" className="cart-details">
                <div className="cartlink">
                  <Link className="cart-link" to={"Minicart"}>
                    <div className="cart-btn-link" >
                      {/* <button className="cart--btn" ></button> */}
                      <span>
                        <img className="cart-icon" src="static/images/cart.svg" alt={"cart-icon"} />
                      </span>
                      <span tabIndex={"0"}>
                        {this.props.itemsQunatity} {this.props.itemsQunatity === 1 ? "item" : "items"}
                      </span>

                    </div>
                  </Link>
                </div>
                <div className="cart-btn" >
                  <div className="cart--btn" onClick={this.handleClick}>
                    <span>
                      <img className="cart-icon" src="static/images/cart.svg" alt={"cart-icon"} />
                    </span>
                    <span tabIndex={"0"}>
                      {this.props.itemsQunatity} {this.props.itemsQunatity === 1 ? "item" : "items"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="cart-page">
            {this.state.toggle ? <CartIcon visible={this.state.toggle} closeModal={this.closeModal} /> : null}
          </div>
          <div className="min-cart-page">
            {/* {<CartIcon />} */}
          </div>
        </header>

      </>
    )
  }

}


const mapStateToProps = (state) => ({
  itemsQunatity: state.cart.itemsQuantity
})


export default connect(mapStateToProps)(Navbar)