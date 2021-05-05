import React, { useState, useEffect } from 'react'; 
import Productlist from './product'
import "../sass/_sidebar.scss"
import "../sass/_grid.scss"
import "../sass/_flex.scss" 
import "../sass/_button.scss"
import "../sass/_dropdown.scss"
import { useDispatch,useSelector } from 'react-redux';
import { getCategorydata } from "../store/actions";

const Sidebar = () =>{
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategorydata())
}, []);
  const categoryData = useSelector(state => state.indexReducer.categoryData);
  const [categoryid, storeCategoryid] = useState("all");
  const [categoryList, setCategoryList] = useState([]);
  var categoryValues = [];
  useEffect(() => {
    setCategoryList(categoryData);
  }, [categoryData]);

  const myCategory = (e, id) => {
    const index = categoryValues.indexOf(id)
    if(index > -1)
    {
      categoryValues.splice(index, 1);
      document.querySelector('#sidebarcategory a.active').classList.remove('active');
      storeCategoryid("all");
    }
    else if (index < 0 && document.querySelector('#sidebarcategory a.active') !== null) 
    {
      document.querySelector('#sidebarcategory a.active').classList.remove('active');
      e.target.className = "active";
      storeCategoryid(id);
      categoryValues.push(id);
    } 
    else
    {
      e.target.className = "active";
      storeCategoryid(id);
      categoryValues.push(id);
    }
  }
  return (
            <div className="col-sm-12">
            <div className="row">
                <div className="col-sm-3 col-md-2">
                    <div className="sidebar" id="sidebarcategory">
                    {categoryList.map((d, i) => {
                      return (
                      <a role="button" id={d.id} key={d.id} onClick={(event) => myCategory(event, d.id)}>{d.name}</a>
                      );
                    })}
                    </div>
                </div> 
                <div className="col-sm-9 col-md-10">
                    <div className="dropdown">
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Category
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" id="dropdownitems">
                        {categoryList.map((d, i) => {
                           return (
                          <a className="dropdown-item" role="button" id={d.id} key={d.id} onClick={(event) => myCategory(event, d.id)}>{d.name}</a>
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
  );
}
  
export default Sidebar;