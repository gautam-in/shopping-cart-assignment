import React from "react";

const Sidebar = ({ categories, filter, selectedcategory }) => {
  const handleFilter = (id) => {
    filter(id);
  };
  return (
    <div className="sidebar">
      {/* <div> */}
        <select
          className="select"
          onChange={(e) => handleFilter(e.target.value)}
        >
          {categories?.length > 0 &&
            categories.map((banner) => (
              <option key={banner.id} value={banner.id}>
                {banner.name}
              </option>
            ))}
        </select>
      {/* </div> */}
      <nav className="nav hide-sm">
        {categories?.length > 0 &&
          categories.map((banner) => (
            <button
              className={`nav-link ${
                banner.id === selectedcategory ? "active" : ""
              }`}
              
              key={banner.id}
              onClick={() => handleFilter(banner.id)}
            >
              {banner.name}
            </button>
          ))}
      </nav>
    </div>
  );
};

export default Sidebar;
