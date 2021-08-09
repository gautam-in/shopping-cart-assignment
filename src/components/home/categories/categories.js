import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../../../redux/category/categoryAction";
import  SingleCategory from "./singleCategory";



const Categories = (props) => {
    useEffect(() => {
       props.fetchCategories()

    }, [])
    return props.categories.loading ? 
    <div>Loading Categories.....</div>
    : props.categories.error ? 
    <div>{props.categories.error}</div>: 
    <div>
        {
            props.categories && props.categories.categories &&
            props.categories.categories.map((cat) => (
                <SingleCategory 
                data={cat}
                key={cat.name}
                />
            ))
        }
    </div>

}

const mapStateToProps = (state) => {
    return {
      categories: state.categories,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchCategories: () => dispatch(fetchCategories()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Categories);