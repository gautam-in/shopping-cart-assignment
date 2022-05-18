import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryData, setSelectedCategory } from "../store/categories/category.action";
import { selectCategoryData } from "../store/categories/category.selector";
import { fetchCategoryData } from "../utils/server/server.util";
import './ProductCategory.scss';

const ProductCategory = ({category}) => {
  const [selectTag,setSelectTag] = useState(category);

    const dispatch = useDispatch();

    useEffect(() => {
  
      const getCategoryData = async () => {
          if(categoryItems.length == 0){
              const categoryData = await fetchCategoryData();
               dispatch(setCategoryData(categoryData));
          }
      }
        dispatch(setSelectedCategory(selectTag));
      
  
      getCategoryData();
    }, []);

    const categoryItems = useSelector(selectCategoryData);

    const selectChangeHandler = (e) => {
      setSelectTag(e.target.value);
      dispatch(setSelectedCategory(e.target.value));
    }

    const categoryChangeHandler = (categoryId) => {
      if(categoryId == selectTag){
        setSelectTag("All");
       dispatch(setSelectedCategory("All"));
      }
      else{
        setSelectTag(categoryId);
       dispatch(setSelectedCategory(categoryId));
      }
    }

  return (
      <>
      <section className="d-md-none productCategoryMobile">
        <select name="categ" id="categ" value={selectTag} onChange={selectChangeHandler}  className="dropdown">
          <option id="1" value="All">
            All Products
          </option>
          {categoryItems.map((categoryItem) => (
            <option key={categoryItem.id} value={categoryItem.id}>
              {categoryItem.name}
            </option>
          ))}
        </select>
      </section>
      <section className="d-none d-sm-none d-md-block productCategory">
        {categoryItems.map((categoryItem) => (
          <div key={categoryItem.id} className="productCategoryItemDiv" onClick={() => categoryChangeHandler(categoryItem.id)} style={{backgroundColor: selectTag == categoryItem.id ? "#d4d4d4" : "rgb(230, 223, 223)"}}>
            <p>{categoryItem.name}</p>
          </div>
        ))}
      </section>
      </>
  );
};

export default ProductCategory;
