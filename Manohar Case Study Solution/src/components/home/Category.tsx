import { useNavigate } from "react-router-dom";

const Category = (props: any) => {
  const navigate = useNavigate();
  let logo = props.data.imageUrl.substring(1);
  return (
    <section className="shadow p-3 mb-5 bg-white rounded">
      <img src={logo} alt={props.data.name} />
      <div className="container">
        <h4 className="mb-3">{props.data.name}</h4>
        <h6 className="mb-3">{props.data.description}</h6>
        <button
          className="category"
          onClick={() => {
            navigate("/products");
          }}
        >
          Explore {props.data.key}
        </button>
      </div>
    </section>
  );
};

export default Category;
