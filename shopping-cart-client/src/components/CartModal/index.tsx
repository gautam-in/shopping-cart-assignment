import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';

function CartModal({children, show, handleClose}:{children:any, show:boolean, handleClose: ()=>void}) {

  const cartTotalQuantity = useSelector(
    (state:any) => state.updateCartItems.cartTotalQuantity
  );
  const carts = useSelector(
    (state:any) => state.updateCartItems.cart
  );

  const totalAmount = carts?.reduce(
    (total:number, item:any) => total + item.price * item.qty,
    0
  )

  return (
      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        animation={false}
        contentClassName='cart-content-modal border-0'
        backdropClassName='backdrop-container'
      >
        <Modal.Header className='cart-modal-header p-2 align-items-center d-none d-lg-flex'>
          <Modal.Title><strong>My Cart</strong><p className='d-inline-block' style={{fontSize:'1em'}}>({cartTotalQuantity} item)</p></Modal.Title>
          <div role="button" onClick={handleClose}>X</div>
        </Modal.Header>
        <Modal.Body className='px-0' style={{background:'#f0ecec', overflowY:'scroll'}}>
          {children}
          <div className='p-2 bg-white m-2 rounded'><img src='/static/images/lowest-price.png' className='mr-4 w-25' alt='lowest price'/><small>You won't find it cheaper anywhere</small></div>
        </Modal.Body>
        <Modal.Footer className='d-flex flex-column'>
          <div>Promo code can be applied on payment page</div>
          <button className=' border-0 d-flex w-100 justify-content-between mt-2 p-2 rounded' style={{background:'rgb(216, 4, 84)', color:'white'}}>
            <div><small>Procees to checkout</small></div>
            <div>Rs. {totalAmount} {' >'}</div>
          </button>
        </Modal.Footer>
      </Modal>
  );
}

export default CartModal;