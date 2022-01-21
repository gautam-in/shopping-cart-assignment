import Button from "../UI Components/Button/Button";
import "./Menubar.scss";

const Menubar = ({ categories, handleClick }) => {
  return (
    <aside className="menubar">
      {categories.map((category) => {
        const categoryId = category.id;
        return (
          <Button
            onClick={() => {
              handleClick(categoryId);
            }}
            key={categoryId}
            className="menubar__button"
          >
            {category.name}
          </Button>
        );
      })}
    </aside>
  );
};

export default Menubar;
