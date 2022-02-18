import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "./sidebar.styles.scss";
import Dropdown from "../dropdown/dropdown.component";

const Sidebar = (props) => {
  const params = useParams();

  return (
    <React.Fragment>
      <Dropdown {...props} />
      <div className="sidebar">
        <ul>
          {props.data.map((list, idx) => (
            <li key={idx}>
              <NavLink
                to={`/products/${list.key}`}
                style={{
                  color:
                    params["productname"] === list.key ? props.activeClass : "",
                }}
              >
                {list.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
