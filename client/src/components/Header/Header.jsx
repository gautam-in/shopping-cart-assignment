import { useState, useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";
import BRANDLOGO from '../../images/logo.png'
 import { FaShoppingCart } from 'react-icons/fa';
import { AuthContainer, CartModalButton, HeaderBrand, HeaderContainer, HeaderContainerWrapper, HeaderLeftSection, HeaderMenu, HeaderRightSection } from './Header.styled';
import CartModal from '../CartModal';
import { useSelector } from 'react-redux';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [totalCartQuantity, setCartQuantity] = useState(null)
  const cartList = useSelector(store => store.cart.cartList);

  const handleModalClose = () => {
    setShowModal(false)
  }

  useEffect(() => {
    const sum = cartList.reduce((acc, obj) => acc + obj.quantity, 0);
    setCartQuantity(sum)
  }, [cartList]);

  return (
    <HeaderContainer>
      <HeaderContainerWrapper>
        <HeaderLeftSection>
          <HeaderBrand>
            <Link to='/'>
              <img src={BRANDLOGO} alt='Sasta Bajar Brand Logo'/>
            </Link>
          </HeaderBrand>
          <HeaderMenu>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/products'>Products</NavLink>
          </HeaderMenu>
        </HeaderLeftSection>
        <HeaderRightSection>
          <AuthContainer>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/signup'>Register</NavLink>
          </AuthContainer>
          <CartModalButton onClick={()=>setShowModal(true)}>
            <FaShoppingCart style={{fontSize: '1rem', color:'#ab4747'}}/>{totalCartQuantity} items
          </CartModalButton>
          {showModal && <CartModal onClose={handleModalClose}/>}
        </HeaderRightSection>
      </HeaderContainerWrapper>
    </HeaderContainer>
  )
}

export default Header