import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { id, name } = category;

  return (
    <div key={id} className="sidebar">
      <span className="sidebar-category">{name}</span>
    </div>
  );
};

export default Category;
