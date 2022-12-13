import { NavLink } from "react-router-dom";
import type { FunctionComponent } from "react";
import { routes } from "../config/routes.config";

const Navigation: FunctionComponent = () => {
  return (
    <nav role="navigation" className="header__nav" aria-label="Main navigation">
      <ul className="list">
        {routes.map(({ path, name }, i) => {
          if(!["Home", "Products"].includes(name)) return "";
          return (
            <li className="list__item" key={`nav-link-${i}`}>
              <NavLink
                end
                to={path}
                key={path}
                className={({ isActive }) =>
                  `list__item--${i}` + (isActive ? " is-active" : "")
                }
              >
                <span>{name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
