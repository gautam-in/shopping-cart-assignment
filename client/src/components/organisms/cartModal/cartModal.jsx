import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../../../pages/products/redux/actions';
import { productsSelectors } from '../../../pages/products/redux/selectors';
import { getTotal } from '../../../utils';
import Button from '../../atoms/button/button';
import useModal from '../../../hooks/useModal';
import CartButton from './cartButton';
import './cartModal.scss';
import CartItemList from './cartItemList';

function CartModal() {
  const { modalRef, showModal, hideModal } = useModal();
  const dispatch = useDispatch();
  const cartItemData = useSelector(productsSelectors.getcartItemsSelectors.selectCartItemsData);

  const handleOnAddItem = (product) => {
    dispatch(productsActions.cartItemActions.addCartItem(product));
  };

  const handleOnRemoveItem = (product) => {
    dispatch(productsActions.cartItemActions.removeCartItem(product));
  };

  return (
    <div>
      <CartButton onClick={showModal} />
      <div className="modal fade" ref={modalRef} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-dark ">
              <h5 className="modal-title modal__header_heading">{`My Cart ( ${
                getTotal(cartItemData, 'quantity') || 0
              } item )`}</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={hideModal}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body modal__body">
              <ul className="modal__body_cartList">
                {cartItemData?.length > 0 ? (
                  <>
                    {cartItemData?.map((item, idx) => {
                      return (
                        <div key={idx}>
                          <CartItemList
                            item={item}
                            handleOnRemoveItem={handleOnRemoveItem}
                            handleOnAddItem={handleOnAddItem}
                          />
                        </div>
                      );
                    })}
                    <div className="modal__body_cartList_items m-3 d-flex align-items-center">
                      <img src={'/static/images/lowest-price.png'} alt="lowest-price" width="80px" />
                      <p className="mb-0 mx-5">You won't find it cheap anywhere</p>
                    </div>
                  </>
                ) : (
                  <div className="text-center">
                    <strong>No items in your cart</strong>
                    <p>Your favourite items are just a click away</p>
                  </div>
                )}
              </ul>
            </div>
            <div className=" modal-footer modal__footer">
              <p className="text-center">
                {cartItemData?.length > 0 && <p className="text-center">Promo code can be applied on payment page</p>}
              </p>
              <Button onClick={hideModal}>
                <div className="d-flex justify-content-between align-items-center p-2">
                  {cartItemData?.length > 0 ? (
                    <>
                      <p className="mb-0">Proceed Checkout </p>
                      <p className="mb-0">
                        <span> &#8377;</span>
                        {cartItemData?.reduce((total, item) => {
                          return total + item.price * item.quantity;
                        }, 0)}
                        <span className="mx-3">&#x3e;</span>
                      </p>
                    </>
                  ) : (
                    <p className="mx-auto mb-0">Start Shopping</p>
                  )}
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
