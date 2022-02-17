import Button from "../UI Components/Button/Button";
import classes from "./Menubar.module.css";

const Menubar = ({ categories, handleClick }) => {
  return (
    <aside className={classes.menubar}>
      {categories.map((category) => {
        const categoryId = category.id;
        if (category.imageUrl !== undefined) {
          return (
            <Button
              key={categoryId}
              handleClick={() => {
                handleClick(categoryId);
              }}
              className={classes.menubar__button}
            >
              {category.name}
            </Button>
          );
        } else {
          return null;
        }
      })}
    </aside>
  );
};

export default Menubar;
