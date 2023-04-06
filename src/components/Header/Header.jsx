import { useNavigate } from 'react-router-dom';
import { useItemContext } from 'src/context/ItemContext';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const { cartItems } = useItemContext();
  return (
    <header>
      <img
        style={{ paddingTop: '12px', width: '8em' }}
        src='static/images/logo.png'
      />
      <div style={{ width: '100%' }}>
        <div style={{ float: 'right' }}>
          <button className='btn mr-3' onClick={() => navigate('/login')}>
            Signin
          </button>
          <button className='btn mr-3' onClick={() => navigate('/register')}>
            Register
          </button>
        </div>
        <div className='row-flex mt-5'>
          <div>
            <button className='btn ml-3 mr-3' onClick={() => navigate('/')}>
              Home
            </button>
            <button className='btn mr-2' onClick={() => navigate('/products')}>
              Products
            </button>
          </div>
          <button className='cart' onClick={() => navigate('/cart')}>
            <img
              src='static/images/cart.svg'
              style={{ width: '25px', fill: '#eeeeee' }}
            />
            <span className='mr-5'>{cartItems.length} items</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
