import React from "react";
import "../../styles/filters.scss"

function Filters({ catgry, categories, setCatgry }) {
  return (
      <>
        <aside className="sidebar products-filter-desktop">
            <ul>
                {categories
                    .sort(function (a, b) {
                    return a.order - b.order;
                    })
                    .map((item) => {
                    return (
                        <button
                        key={item.id}
                        onClick={() =>
                            setCatgry((catgry) => {
                            if (catgry && catgry == item.id) return item.id;
                            else return item.id;
                            })
                        }
                        >
                        <li className={catgry === item.id ? "active" :""} >
                            <span className="item-title">{item.name}</span>
                        </li>
                        </button>
                    );
                    })
                }
            </ul>
        </aside>
        
        <div className="products-filter-mobile">
                <select className="products-filter-select-mobile" 
                    onChange={(e) =>
                                    setCatgry((catgry) => {
                                    if (catgry && catgry == e.target.value) return e.target.value;
                                    else return e.target.value;
                                    })
                    }>
                    {categories
                        .sort(function (a, b) {
                        return a.order - b.order;
                        })
                        .map((item) => {
                        return (
                            
                            <option key={item.id} className={catgry === item.id ? "active" :""} value={item.id} >
                                {item.name}
                            </option>
                        );
                        })
                    }
                </select>
        </div>
    </>
  );
}

export default Filters;
