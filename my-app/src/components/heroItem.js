function HeroItem(props) {
  return (
    <div className={`carousel-item ${props.list.order == 1 ? "active" : ""}`}>
      <img className="d-block w-100" src={props.list.bannerImageUrl} alt="First slide" />
    </div>
  )
}
export default HeroItem;