export default function CartItem(props) {
  return (
    <li className="cart-item">
      <img src={props.image} alt={props.name} />
      <div>
        <h4>{props.name}</h4>
        <section>
          <button onClick={props.onRemove}>-</button>
          <span>{props.amount}</span>
          <button onClick={props.onAdd}>+</button>
        </section>
      </div>
      <p>{props.price * props.amount}</p>
    </li>
  );
}
