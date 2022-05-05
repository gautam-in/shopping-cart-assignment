import Category from "../../components/Category/Category";


const Categories = ({data}) => {
  return data.map((val) => (
    <>
        <Category data={val} />
    </>
  ));
};

export default Categories;
