import Button from "../UI Components/Button/Button";
import classes from "./CategoryContent.module.css";

const CategoryContent = ({
  heading,
  text,
  category,
  handleClick,
  id,
  className,
}) => {
  return (
    <div className={`${className} ${classes.content__container}`}>
      <h2 className={classes.content__container__heading}>{heading}</h2>
      <p className={classes.content__container__text}>{text}</p>
      <Button
        onClick={() => {
          handleClick(id);
        }}
      >
        Explore {category}
      </Button>
    </div>
  );
};

export default CategoryContent;
