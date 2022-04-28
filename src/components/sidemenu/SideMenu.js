import React, { useState, useEffect, } from 'react';                            
import './SideMenu.css';    
import { Link,  } from 'react-router-dom';
import listofCategoriesMock from '../../server/categories/index.get.json';
import listofProductsMocks from '../../server/products/index.get.json';
import ProgressIndicator from '../../components/progressIndficator/ProgressIndicator';


function SideMenu(props) {
  const [ listofCategories, setListofCategories] = useState(listofCategoriesMock);
  const [ itemSelectedProgress, setItemSelectedProgress] = useState(false);





  const filterCategorieds = (categoryType) => {
    return () => {
       setItemSelectedProgress(true);
       document.querySelector('body').style.overflow = 'hidden';
        const categoryFilter = listofProductsMocks.filter((item, index) => {
          return item.category === categoryType;
        });
        props.receivefilterCategorieds(categoryFilter);
        setTimeout(() => {
          setItemSelectedProgress(false);
          document.querySelector('body').style.overflow = 'auto';
        }, 800);
        
    }
  }
  useEffect(() => {
    setListofCategories(listofCategoriesMock);
    console.log(listofCategories);
  }, []);
return (
      <React.Fragment>
          <div class="pplwrappernav">
            <ul>
              {listofCategories.map((item, index) => {
                return (
                  <React.Fragment key={index} >
                      <li onClick={filterCategorieds(item.id)}> <Link>{item.name}</Link></li>
                  </React.Fragment>
                )
              })}
            </ul>
        </div>
        {itemSelectedProgress && <ProgressIndicator message={' Catogory Loading.... '} /> }
      </React.Fragment>
      )
}
export default SideMenu;
