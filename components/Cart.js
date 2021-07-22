import { useEffect } from 'react/cjs/react.development';
import { useAppData } from '../lib/store';
import { CartStyle } from './styles/CartStyle';

export default function Cart() {
  const contextData = useAppData();
  const { cartOpen } = contextData?.data;

  return (
    <>
      {cartOpen && (
        <CartStyle>
          <p>hi</p>
        </CartStyle>
      )}
    </>
  );
}
