import { useEffect } from "react";
import { connect } from "react-redux";
import Category from "./Category";
import CategoriesContainer from "./styles/CategoriesContainerStyle";
import { fetchCategories } from "../actions";


function Categories({ categories,fetchCategories }) {
  useEffect(() => {
    (async () => {
      await fetchCategories();
    })();
  }, []);
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

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
  };
};

export default connect(mapStateToProps,{fetchCategories})(Categories)
