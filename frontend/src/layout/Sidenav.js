import React from "react";

function Sidenav({ categories, setCategory }) {
  return (
    <aside className="side-nav">
      <nav aria-label="product category filter">
        <ul>
          {categories.map((cat) => {
            return (
              <li key={cat.id}>
                <button
                  onClick={() =>
                    setCategory((prev) => (prev !== cat.id ? cat.id : ""))
                  }
                >
                  {cat.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidenav;
