import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../redux/Categories/categoriesactions";
import Eachcategory from "./Eachcategory";
import { element } from "prop-types";
function Categories({ categoriesData, fetchCategories }) {
  useEffect(() => {
    fetchCategories();
  }, []);
  return categoriesData.loading ? (
    <h2>Loading</h2>
  ) : categoriesData.error ? (
    <h2>{categoriesData.error}</h2>
  ) : (
    <div>
      {console.log(categoriesData)}
      {categoriesData &&
        categoriesData.categories &&
        categoriesData.categories.map((element, index) => (
          <Eachcategory
            data={element}
            key={element.id}
            reverse={index % 2 === 0}
          />
        ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categoriesData: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
