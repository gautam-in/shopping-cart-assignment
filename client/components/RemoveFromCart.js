import styled from 'styled-components';
import { useCart } from './CartContext';

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: var(--red);
    cursor: pointer;
  }
`;

export default function RemoveFromCart({ item }) {
  const {dispatch} = useCart();
  const removeItem = () => {
    dispatch({
      type: "REMOVE",
      data: {
        item
      }
    })
  }
  return (
    <BigButton onClick={removeItem}
      type="button"
      title="Remove This Item from Cart"
    >
      &times;
    </BigButton>
  );
}