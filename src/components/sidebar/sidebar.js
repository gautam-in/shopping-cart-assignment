import React, { useState, useEffect } from 'react'; 
import Productlist from '../product/product'
import "./_sidebar.scss"
import "../product/_grid.scss"
import "../button/_button.scss"
import "../product/_dropdown.scss"
import { useDispatch,useSelector } from 'react-redux';
import { getCategorydata } from "../../store/actions";

const Sidebar = () =>{
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategorydata())
}, []);
  const categoryData = useSelector(state => state.indexReducer.categoryData);
  const [categoryid, storeCategoryid] = useState("all");
  const [categoryList, setCategoryList] = useState([]);
  const [categoryValues, setCategoryValues] = useState([]);
  
  useEffect(() => {
    setCategoryList(categoryData);
  }, [categoryData]);

  const myCategory = (e, id, type) => {
    let stateVal = categoryValues;
    const index = categoryValues.indexOf(id)
    if(index > -1)
    {
      categoryValues.splice(index, 1);
      if (document.querySelector('#sidebarcategory a.active') !== null && type === 0) document.querySelector('#sidebarcategory a.active').classList.remove('active');
      if (document.querySelector('#dropdownitems a.active') !== null && type === 1) document.querySelector('#dropdownitems a.active').classList.remove('active');
      storeCategoryid("all");
    }
    else 
    {
      e.target.className = "active";
      storeCategoryid(id);
      stateVal.push(id);
      setCategoryValues(stateVal);
    }
  }
  return (
          <div className="section">
              <div className="col-sm-12">
                  <div className="row">
                      <div className="col-sm-3 col-md-2 p-0">
                          <div className="sidebar" id="sidebarcategory">
                          {categoryList.map((d, i) => {
                            return (
                            <a tabindex="0" role="button" aria-pressed="false" id={d.id} key={d.id} onClick={(event) => myCategory(event, d.id, 0)}>{d.name}</a>
                            );
                          })}
                          </div>
                      </div> 
                      <div className="col-sm-9 col-md-10 p-0">
                          <div className="dropdown">
                              <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Category
                              </a>
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" id="dropdownitems">
                              {categoryList.map((d, i) => {
                                return (
                                <span className="dropdown-item"><a tabIndex="1" role="button" aria-pressed="false" id={d.id} key={d.id} onClick={(event) => myCategory(event, d.id, 1)}>{d.name}</a></span>
                                );
                              })}
                              </div>
                          </div>
                          <div className="card">
                              <Productlist category={categoryid}/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  );
}
  
export default Sidebar;