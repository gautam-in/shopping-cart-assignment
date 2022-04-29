import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {Dropdown,DropdownButton} from "react-bootstrap";

function ProductListNav({ categories = [] }) {
  const [value,setValue]=useState("Fruits & Vegetables");
  const handleSelect=(e)=>{
    setValue(e.target.id)
  }
  if (categories.length === 0) return null;
  
  return (
    <>
     
    <ul className="d-none d-md-block product-list-nav">
      {categories.map(category => {
        return (
          <li key={category.id}>
            <Link to={`/products/${category.name.toLowerCase().replaceAll(' ', '-')}`}>{category.name}</Link>
          </li>
        );
      })}
    </ul>

    <DropdownButton className='d-md-none' id="dropdown-basic-button" title={value} >
      {categories.map((category,index)=>{
        return (
          <Dropdown.Item key={index} onClick={handleSelect} as={Link} to={`/products/${category.name.toLowerCase().replaceAll(' ', '-')}`} id={category.name}>{category.name}</Dropdown.Item>
        );
      })
      }
    </DropdownButton>
    
</>
  );
}

export default ProductListNav;
