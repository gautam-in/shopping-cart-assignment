function Quantity({
  quantity,
  increment,
  decrement,
}: {
  quantity: number;
  increment: () => void;
  decrement: () => void;
}) {
  return (
    <div className="quantity">
      <button type="button" onClick={decrement}>
        -
      </button>
      <span className="quantity-value">{quantity}</span>
      <button type="button" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Quantity;
