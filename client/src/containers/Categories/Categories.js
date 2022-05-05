import { Fragment } from  "react";
import Category from "../../components/Category/Category";


const Categories = ({data}) => {
  return data.map((val) => (
    <Fragment>
        <Category data={val} />
    </Fragment>
  ));
};

export default Categories;
