import Category from "../Category";

const Categories = ({ loading, data = [] }) => {
  return loading ? (
    <div>Loading...</div>
  ) : data.length > 0 ? (
    <div>
      {data.map((item: any, index) => (
        <div className="container-bottom-shadow" key={item.id}>
          <Category item={item} index={index} />
        </div>
      ))}
    </div>
  ) : (
    <></>
  );
};

export default Categories;
