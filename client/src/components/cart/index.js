import * as React from 'react';
import Badge from '@mui/material/Badge';
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useDispatch, useSelector} from 'react-redux';
import MuiResponsiveDialog from '../common/muiResponsiveDialog';
import {decreaseCounterInCart, hideMiniCart, increaseCounterInCart, showMiniCart} from '../../reducers/productReducer';
import {Typography} from '@mui/material';
import MuiButton from '../common/muiButton';
import "./styles.scss";
import assetObject from '../../utils/constants/assets';
import theme from "../../theme";
import GroupedButtons from '../minicartContents/groupedButtons';

const StyledBadge = styled(Badge)(({theme}) => ({
  '& .MuiBadge-badge': {
    border: `0.125rem solid ${theme.palette.background.paper}`,
    padding: '0 0.25rem',

  },
}));

export default function Cart() {

  const [totalPrice, setTotalPrice] = React.useState(0);

  const dispatch = useDispatch();
  const {cartItems, isResponsiveDialogOpen, groupedCartData} = useSelector((state) => state.product);


  React.useEffect(() => {
    let newPrice = 0;
    Object.values(groupedCartData).forEach((item) => {
      newPrice += item[0]?.price * item?.length;
    });
    setTotalPrice(newPrice);
  }, [groupedCartData]);




  const onCartClickHandler = () => {
    dispatch(showMiniCart());
  };

  const onCloseHandler = (e) => {
    e.stopPropagation();
    dispatch(hideMiniCart());
  };

  const onIncrementHandler = (item) => {
    dispatch(increaseCounterInCart(item.id));
  };


  const onDecrementHandler = (item) => {
    dispatch(decreaseCounterInCart(item.id));
  };


  const Title = () => {
    return (
      <>
        <Typography variant='h6' component='span'>My Cart
        </Typography>
        <Typography component="span" variant='body1'>
          &nbsp;&nbsp;&nbsp;{cartItems}&nbsp;item(s)
        </Typography>
      </>
    );
  };


  const PriceContainer = <article>
    <Typography component='p' variant='p'>Proceed to Checkout</Typography>
    <Typography component='p' variant='p'>&#8377;{totalPrice}</Typography>
  </article>;



  const Footer = () => (<MuiButton className="footer-button" onClick={(e) => onCloseHandler(e)} fullWidth variant="contained">{cartItems ? PriceContainer : 'Start shopping'}</MuiButton>);




  return (
    <IconButton onClick={onCartClickHandler} aria-label="cart">
      <StyledBadge fontSize='medium' badgeContent={cartItems} color="secondary" >
        <ShoppingCartIcon fontSize='medium' color="primary" />
      </StyledBadge>
      <MuiResponsiveDialog
        title={
          <Title />
        }
        onClose={(e) => onCloseHandler(e)}
        open={isResponsiveDialogOpen}
        footer={<Footer />}
        customClass="minicart-dialog-wrapper"
        bodyClassName="minicart-dialog-body"
        style={{top: 0}}
      >
        <section>
          {!cartItems ?
            <article className='minicart-empty-container'>
              <Typography variant='h6'>
                No Items in your cart
              </Typography>
              <Typography variant='p'>
                Your favourite items are just a click away
              </Typography>
            </article>
            :
            <section className='minicart-full-container' >
              {
                Object.values(groupedCartData).map((item) => {
                  if (item?.length>0) {
                    return (
                      <article className='minicart-main-article' key={item[0]?.id}>
                        <figure>
                          <img src={item[0]?.imageURL} alt={item[0]?.name} />
                        </figure>
                        <article>
                          <Typography gutterBottom fontWeight={theme.typography.fontWeightBold} component='p' variant="p">{item[0]?.name}</Typography>
                          <div className='button-price-group'>
                            <GroupedButtons onIncrementHandler={() => onIncrementHandler(item[0])} onDecrementHandler={() => onDecrementHandler(item[0])} count={item?.length} />
                            <Typography fontWeight={theme.typography.fontWeightMedium} variant='p' component='p'> &nbsp;&nbsp; X &nbsp;&nbsp; &#8377;{item[0]?.price}</Typography>
                          </div>
                        </article>
                        <Typography className='total-price' variant='body2' component='p'> &#8377;{item[0]?.price * item?.length}</Typography>
                      </article>
                    );
                  }
                }

                )
              }
              <section className='banner-container'>
                <figure>
                  <img src={assetObject.cartBanner.src} alt={assetObject.cartBanner.alt} />
                </figure>
                <Typography variant="p" component="p" >You won't find it cheaper anywhere</Typography>
              </section>
            </section>
          }
        </section>
      </MuiResponsiveDialog>
    </IconButton>
  );
}

