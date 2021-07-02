import PropTypes from 'prop-types';
import withErrorHandler from '../../ErrorBoundary/withErrorHandler';
import {CategoriesContainer} from './categories.styles';
import Category from './Category';


const CategoriesComponent = ({categories}) =>{

    const renderCategories = (categories) => {
        if (categories) {
          return categories.map((category) => {
            return <Category key={category.id} category={category} />;
          });
        } else {
          return <div>loading...</div>;
        }
      };
      return (
        <CategoriesContainer>{renderCategories(categories)}</CategoriesContainer>
      );
}

CategoriesComponent.propTypes ={
    categories: PropTypes.array,
  }
export default withErrorHandler(CategoriesComponent)

  