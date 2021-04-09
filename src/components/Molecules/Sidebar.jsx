import React from "react";
import "../../styles/sidebar.scss"

function Sidebar({ catgry, categories, setCatgry }) {
  return (
    <aside className="sidebar">
        <ul>
            {categories
                .sort(function (a, b) {
                return a.order - b.order;
                })
                .map((item) => {
                return (
                    <li key={item.id}

                    className={catgry === item.id ? "active" :""}
                    
                    onClick={() =>
                        setCatgry((catgry) => {
                        if (catgry && catgry == item.id) return item.id;
                        else return item.id;
                        })
                    }
                    >
                        <span className="item-title">{item.name}</span>
                    </li>
                );
                })
            }
        </ul>
    </aside>
  );
}

export default Sidebar;
