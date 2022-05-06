import { Fragment } from  "react";
import Category from "../../components/Category/Category";


const Categories = ({data,...rest}) => {
  
  return data.map((val) => (
    <Fragment>
        <Category data={val} {...rest}/>
    </Fragment>
  ));
};

export default Categories;
