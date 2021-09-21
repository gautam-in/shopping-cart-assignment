import Link from 'next/link';

const CheckoutButton = ({ noOfItems, total, closeCart }) => {
  return (
    <>
      {noOfItems > 0 ? (
        <div className="checkout_button" role="button">
          <div>Proceed to Checkout</div>
          <div>
            {'Rs. ' + total + ' '} <i className="fas fa-angle-right" />
          </div>
        </div>
      ) : (
        <Link href="/products">
          <a className="start_shopping" onClick={closeCart}>
            Start Shopping
          </a>
        </Link>
      )}
    </>
  );
};

export default CheckoutButton;
