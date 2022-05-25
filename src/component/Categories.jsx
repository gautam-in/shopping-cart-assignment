import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { id, name } = category;

  return (
    <div key={id} className="sidebar">
      <Link to={`/products/${id}`}>
        <span className="sidebar-category">{name}</span>
      </Link>
    </div>
  );
};

export default Category;
