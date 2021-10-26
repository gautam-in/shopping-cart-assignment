import "./category.scss";
import Button from "../../../UI/Button/Button";

const Category = (props) => {
  let imagePosition = "";
  if (props.order % 2 === 0) {
    imagePosition = "reverse";
  }
  return (
    <>
     
      <div className={["category", imagePosition].join(" ")}>
        <div className="category__image">
          <picture>
            <source media="(max-width:1024px)" srcSet={props.imageUrl} />
            <source media="(max-width:732px)" srcSet={props.imageUrl} />
            <img src={props.imageUrl} />
          </picture>
        </div>
        <div className="category__content">
          <div className="category__contentinside">
            <h3 aria-label={props.name}>{props.name}</h3>
            <p className="category__description">{props.description}</p>
            <Button className="category__btnName" click={props.setPath}>
              {"Explore " + props.btnName}
            </Button>
          </div>
        </div>
        
      </div>
      <div> <hr className="horizontalRow" /></div>
    </>
  );
};

export default Category;