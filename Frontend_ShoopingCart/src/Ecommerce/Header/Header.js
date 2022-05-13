import React, { useState } from 'react';
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Logo from '../static/images/logo.png';
import './header.css';
import { ReactComponent as Cart } from '../static/images/cart.svg';
import Minicart from '../MiniCart/Minicart';

export default function Header(props) {
  const [show, setShow] = useState(false);
  const { cartItems, onAdd, onRemove, countCartItems } = props;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <div className="header">
        <div className="logo_Container">
          <Link to="/">
            <img src={Logo} alt="Sabkabazar" height="50px" />
          </Link>
        </div>
        <div className="heading_Container">
          <Link to="/home" className="nav_link">
            Home
          </Link>{' '}
          &nbsp;&nbsp;
          <Link
            to="/product"
            className="nav_link"
            dataa={{ handleShow: { handleShow } }}
          >
            Product
          </Link>
        </div>
        <div className="heading_Container1">
          <div className="subHeading">
            <Link to="/login" className="nav_link">
              Signin
            </Link>{' '}
            &nbsp;&nbsp;
            <Link to="/" className="nav_link">
              Register
            </Link>
          </div>
          <div className="cart" onClick={handleShow}>
            <Cart className="cart_logo" />
            <div> {countCartItems} Items</div>
          </div>
        </div>
        <Minicart
          handleClose={handleClose}
          show={show}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      </div>

      <Outlet />
    </Fragment>
  );
}

// <div className="card shadow  mb-1 bg-white rounded  ">
// <div className="headerContainer ">
//   <div>
//     <div className="card-body container  ">
//       <img src={Logo} alt="Sabkabazar" height="50px" />
//     </div>
//   </div>
//   <div className="mt-5    showHeadings">
//     <Link className="px-2" to="/home">
//       Home
//     </Link>
//     <Link
//       to="/product"
//       dataa={{ handleShow: { handleShow } }}
//     >
//       Product
//     </Link>
//   </div>
//   <div className="mt-1 d-flex ">
//     <Link className="px-1" to="/login">
//       Signin
//     </Link>
//     <Link to="/">Register</Link>
//   </div>
// </div>
// </div>

// <div className="navigation fluid-container card shadow  mb-1 bg-white rounded">
//         <div className="">
//           <Link className="logo-container" to="/">
//             <div className="card-body container  ">
//               <img src={Logo} alt="Sabkabazar" height="50px" />
//             </div>
//           </Link>
//           <div className="nav-links-container">
//             <Link className="nav-link" to="/home">
//               Home
//             </Link>
//             <Link className="nav-link" to="/product">
//               Product
//             </Link>
//             <Link className="nav-link" to="/login">
//               Login Page
//             </Link>
//           </div>
//         </div>
//       </div>

// <div>
// <Cart className="logo" onClick={handleShow} />{' '}
// <span> items</span>
// </div>
// <Minicart
// handleClose={handleClose}
// show={show}
// cartItems={cartItems}
// onAdd={onAdd}
// onRemove={onRemove}
// />
