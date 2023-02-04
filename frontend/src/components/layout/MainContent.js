import React from "react";
import { Outlet } from "react-router-dom";

function MainContent() {
  return (
    <main>
      <div className="container-lg">
        <Outlet />
      </div>
    </main>
  );
}

export default MainContent;
