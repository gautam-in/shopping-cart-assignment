import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavlinkStyles } from "./styles/allproducts";
export default function SideNav(props) {
  const [navlink, setNavLink] = useState([]);

  useEffect(() => {
    LoadCategories();
  }, [])
  const LoadCategories = async () => {
    await axios.get('http://localhost:8888/categories')
      .then(res => {
        //console.log(res.data);
        setNavLink(res.data);
      });
  }
  return (

    <NavlinkStyles>
      {/* {
          props.categoryLinks.map(item => (
            <li><Link to={`/products/${item}`}>{ }</Link></li>
          ))
        } */}
      {
        navlink.map(item => (
          <li key={item.id}><Link to={`/products/${item.id}`}>{item.name}</Link></li>
        ))
      }
    </NavlinkStyles>

  );
}
