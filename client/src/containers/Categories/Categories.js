import { Fragment } from  "react";
import PropTypes from 'prop-types';
import Category from "../../components/Category/Category";


const Categories = ({data,...rest}) => {
  
  return data.map((val) => (
    <Fragment>
        <Category data={val} {...rest}/>
    </Fragment>
  ));
};

Categories.propTypes = {
  data: PropTypes.array,
  rest: PropTypes.object
}

Categories.defaultProps = {
  data: [],
  rest: {}
}

export default Categories;
