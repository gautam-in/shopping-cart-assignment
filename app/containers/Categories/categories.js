import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoriesComponent from '../../components/Categories';
import { fetchCategories } from '../../../store/actions';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';

const Categories = ({ categories, fetchCategories }) => {
  useEffect(() => {
    fetchCategories()
  }, []);

  if(categories){
    return <CategoriesComponent categories={categories} />;
  }
  else{
      return<div>Loading..</div>
  }

};
const mapStateToProps = (state) => {

  return {
    categories: state.categories.categories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: bindActionCreators(fetchCategories, dispatch),
  };
};
Categories.propTypes = {
  categories: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
