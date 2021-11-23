import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavlinkStyles } from "./styles/allproducts";
export default function SideNav(props) {
  const [navlink, setNavLink] = useState([]);

  useEffect(() => {
    LoadCategories();
  }, []);

  const LoadCategories = () => {
    axios.get('http://localhost:8888/categories')
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Something went wrong in categories');
        }
        setNavLink(res.data);
      }).catch(error => {
        console.log(error);
      });
  }
  return (
    <NavlinkStyles>
      {
        navlink.map(item => (
          <li key={item.id}><Link to={`/products/${item.id}`}>{item.name}</Link></li>
        ))
      }
    </NavlinkStyles>
  );
}
