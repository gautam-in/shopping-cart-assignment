import React from 'react';

const DesktopView = ({
  title,
  body,
  footer,
  cheaperTag,
  noItemsExistsContent,
  noItemsExistsFooter,
  isItemsExistsInCart,
}) => {
  console.log('Desktopview...', isItemsExistsInCart);
  return isItemsExistsInCart ? (
    <>
      <div className='cart-title fs-4 fw-bold m-1'>{title()}</div>
      {body()}
      {cheaperTag()}
      <footer className='cart-footer'>{footer()}</footer>
    </>
  ) : (
    <>
      {noItemsExistsContent()}
      <footer className='no-items-cart-footer'>{noItemsExistsFooter()}</footer>
    </>
  );
};

export default DesktopView;
