import './card.scss';

function Card(props) {
  const { children } = props;
  return (
    <>
      <div className="card__container">{children}</div>
    </>
  );
}

export default Card;
