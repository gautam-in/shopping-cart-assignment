import axios from "axios";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./SideBar.module.css";
import classNames from "classnames";
import { useAlert } from "react-alert";

export const SideBar = (props) => {
  const [navlink, setNavLink] = useState([]);
  const [activeLink, setActiveLink] = useState("");
  const alert = useAlert();

  useEffect(() => {
    LoadCategories();
  }, []);

  const LoadCategories = () => {
    axios
      .get("http://localhost:5000/categories")
      .then((res) => {
        if (res.status !== 200) {
          alert.error("Something went wrong!");
        }
        setNavLink(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(activeLink);
  return (
    <div className={classNames(styles.linkStyles)}>
      {navlink.map((item) => (
        <li
          key={item.id}
          className={classNames(activeLink === item?.name ? "bg-gray-300" : "")}
        >
          <NavLink
            onClick={() => setActiveLink(item?.name)}
            to={`/products/${item.id}`}
            className={"sm:text-sm"}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </div>
  );
};
