import Button from "../UI Components/Button/Button";
import "./Content.scss";

const Content = ({ heading, text, category, handleClick, id, className }) => {
  return (
    <div className={`${className} content-container`}>
      <h2 className="content-container__heading">{heading}</h2>
      <p className="content-container__text">{text}</p>
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

export default Content;
