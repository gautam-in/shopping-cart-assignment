import React from "react";

function Aside({ cat, categories, setCat }) {
  return (
    <aside className="sidebar">
      {categories
        .sort(function (a, b) {
          return a.order - b.order;
        })
        .map((p) => {
          return (
            <button
              style={{
                backgroundColor: cat === p.id ? "lightgray" : "transparent",
              }}
              onClick={() =>
                setCat((cat) => {
                  if (cat && cat == p.id) return null;
                  else return p.id;
                })
              }
            >
              {p.name}
            </button>
          );
        })}
    </aside>
  );
}

export default Aside;
