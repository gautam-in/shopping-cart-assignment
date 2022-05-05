import { Fragment } from  "react";
import { useHistory } from "react-router-dom";
import Category from "../../components/Category/Category";


const Categories = ({data}) => {
  const history = useHistory()

  const handleClick = () => {
    history.push('/products')
  }
  return data.map((val) => (
    <Fragment>
        <Category data={val} handleClick={handleClick}/>
    </Fragment>
  ));
};

export default Categories;
