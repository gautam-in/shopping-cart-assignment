import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import './Cart.css';
import LowesetPriceImg from '../../images/lowest-price.png';
import Card from '@material-ui/core/Card';
import CloseIcon from '@material-ui/icons/Close';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import RemoveCircleSharpIcon from '@material-ui/icons/RemoveCircleSharp';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import { useDispatch } from 'react-redux';
const ResponsiveDialog = () => {
    const countOfItems = useSelector((state) => {
        return state.CartReducer.countOfItems
    });
    const listOfProducts = useSelector((state) => {
        return state.CartReducer.listOfProducts
    });
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => {
        return state.CartReducer.isCartModalOpen
    });
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClose = () => {
        dispatch({ type: 'CLOSE_MODAL_FOR_CART' })
    };
    /** when click on plus icon in cart */
    const incrementProductItem = (e, item) => {
        dispatch({ type: 'INCREMENT_PRODUCT_ITEMS', payload: item })
    }
    /** when click on minus icon in cart */
    const decrementProductItem = (e, item) => {
        dispatch({ type: 'DECREMENT_PRODUCT_ITEMS', payload: item })
    }
    const totalPriceProduct = Object.values(listOfProducts).reduce((acc, curr) => {
        return acc + (curr.count * curr.price);
    }, 0)
    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={isModalOpen}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title" className='modalHeader'>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                            <span>My Cart</span> &nbsp;
                            <span>({countOfItems} item)</span>
                        </div>
                        <div onClick={handleClose}>
                            <CloseIcon />
                        </div>
                    </div>

                </DialogTitle>
                {Object.values(listOfProducts).length
                    ?
                    <React.Fragment>
                        <DialogContent className='dialogContent'>
                            <DialogContentText>
                                {
                                    Object.values(listOfProducts).length ?
                                        Object.values(listOfProducts).map((items, index) => {
                                            return (
                                                <React.Fragment>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <div style={{ width: '30%' }}>
                                                            <img src={items.imageURL} width="110" />
                                                        </div>
                                                        <div style={{ width: '70%' }}>
                                                            <div>
                                                                {items.name}
                                                            </div>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                <div>
                                                                    <div style={{ display: 'flex' }}>
                                                                        <span onClick={(e) => decrementProductItem(e, items)}>
                                                                            <RemoveCircleSharpIcon />
                                                                        </span>
                                                                        &nbsp;
                                                                        <span>{items.count}</span>
                                                                        &nbsp;
                                                                        <span onClick={(e) => incrementProductItem(e, items)}>
                                                                            <AddCircleSharpIcon />
                                                                        </span>
                                                                        &nbsp;&nbsp;&nbsp;
                                                                        <span>X</span>
                                                                        &nbsp;&nbsp;&nbsp;
                                                                        <span>
                                                                            <span>Rs.</span>
                                                                            &nbsp;
                                                                            <span>{items.price}</span>
                                                                        </span>
                                                                    </div>

                                                                </div>
                                                                <div>
                                                                    <span>{items.count * items.price}</span>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                            )

                                        })
                                        : null
                                }
                            </DialogContentText>
                            <DialogContentText>
                                <Card>
                                    <div className='lowestPrice'>
                                        <div>
                                            <img src={LowesetPriceImg} />
                                        </div>
                                        <div>
                                            You won't find it cheaper anywhere
                                        </div>
                                    </div>
                                </Card>
                            </DialogContentText>
                        </DialogContent>
                    </React.Fragment>
                    :
                    <DialogContent className='noCartDialogContent'>
                        <DialogContentText>
                            <div style={{ display: 'flex', justifyContent: 'center', fontWeight: 700 }}>No items in your cart</div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>Your favorite items are just a click away</div>
                        </DialogContentText>
                    </DialogContent>
                }


                <DialogContentText>
                    <div className='footerContentText'>
                        {
                            Object.values(listOfProducts).length
                                ?
                                <React.Fragment>
                                    <div className='promoText'>Promo code can be applied on payment page</div>
                                    <div className='cartFooter'>
                                        <div>Proceed to Checkout</div>
                                        <div style={{ display: 'flex' }}>
                                            <div>
                                                <span>
                                                    Rs.
                                                </span>
                                                &nbsp;
                                                <span>
                                                    {totalPriceProduct}
                                                </span>
                                            </div>
                                            <div>
                                                <ChevronRightIcon />
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                                :
                                <div className='emptyCartFooter'>
                                    <div>Start Shopping</div>

                                </div>
                        }

                    </div>
                </DialogContentText>
            </Dialog>
        </div>
    );
}
export default ResponsiveDialog;
