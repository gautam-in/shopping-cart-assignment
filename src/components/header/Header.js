import React, { useState, useEffect, } from "react";
import Logo from '../../images/logo.png';
import Cart from '../../images/cart.svg';
import AddCartModal from '../addCartModal/AddCartModal';
import LoutOutIcon from  '../../images/logout.png';
import { history } from '../../stores/_helpers';

import './Header.css';
import { NavLink  } from 'react-router-dom';

function Header(props) {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [userExisted, setUserExisted] = React.useState(false);
    const [selectedItems, setSelectedItems ] = useState([]);
    const [cartCount, setCartCount ] = useState(0);
    const [refreshComp, setRefreshComp ] = useState();




    const handleModelOpen = () => {
        setModalOpen(true);
        setRefreshComp(Math.random());
        setModalOpen(true);
      };
      const handleModelClose = () => {
        setModalOpen(false);
      };
      const logoutUser = () => {
        localStorage.removeItem('user');
        history.push('/signin');
        location.reload();
      };

      function removeDuplicates(originalArray, prop) {
        var newArray = [];
        var lookupObject  = {};
   
        for(var i in originalArray) {
           lookupObject[originalArray[i][prop]] = originalArray[i];
        }
   
        for(i in lookupObject) {
            newArray.push(lookupObject[i]);
        }
         return newArray;
    }

    
      useEffect(() => {
            const userLoggedIn = localStorage.getItem('user');     
            if(userLoggedIn) {
                setUserExisted(true);
            }
            if(JSON.parse(localStorage.getItem('seletedPrd')) !== null &&  JSON.parse(localStorage.getItem('seletedPrd')).length > 0 ) {
                setCartCount(removeDuplicates(JSON.parse(localStorage.getItem('seletedPrd')), 'id').length);
                setSelectedItems(removeDuplicates(JSON.parse(localStorage.getItem('seletedPrd')), 'id'));  
            }

      }, [refreshComp, props.refreshComp]);
return (
      <React.Fragment>
          <header>
                <div className="headerWrapper">
                        <div className="logoSAection">
                                <img src={Logo} alt="Logo here" />
                                <ul>
                                    <li><NavLink to='/home'> Home </NavLink> </li>
                                    <li><NavLink to='/product'> Products </NavLink> </li>
                                </ul>
                        </div>
                        <div className="cardItem">
                                <div className="registernav">
                                    {userExisted  && 
                                    <span onClick={logoutUser}>
                                        <img src={LoutOutIcon} />
                                    </span> }
                                    {!userExisted &&  <><span><NavLink to='/signin'> SignIn </NavLink> </span> 
                                    <span><NavLink to='/'> SignUp </NavLink> </span></> }
                                </div>
                                <div className="addcartbtn" onClick={handleModelOpen}>
                                    <img src={Cart} alt="cart icon here" /> <label> {cartCount} Items</label>
                                </div>
                        </div>
                </div>
            </header>
            <AddCartModal 
                modalOpen={modalOpen}
                handleModelClose={handleModelClose}
                selectedItems={selectedItems}
                cartCount={cartCount}
            />
      </React.Fragment>
      )
}
export default Header;
