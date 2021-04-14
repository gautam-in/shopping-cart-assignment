import React from "react";

function AsideMobile({ cat, categories, setCat, setMenu }) {
  return (
    <aside className="sidebarMobile">
      {categories
        .sort(function (a, b) {
          return a.order - b.order;
        })
        .map((p, i) => {
          return (
            <div
              style={{
                backgroundColor: cat === p.id ? "lightgray" : "transparent",
              }}
              onClick={() => {
                setCat((cat) => {
                  if (cat && cat == p.id) return null;
                  else return p.id;
                });
                setMenu(false);
              }}
            >
              {p.name}
            </div>
          );
        })}
    </aside>
  );
}

export default AsideMobile;
