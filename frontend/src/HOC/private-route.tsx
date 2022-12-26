import React from "react";
import { Sidebar } from "../layout/sidebar";
import { Banners } from "../views/banners";

interface Props {
  component: React.FC;
}

export const PrivateRoute: React.FC<Props> = ({ component: Component }) => {
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <main>
        <Banners />
        <div
          style={{
            display: "flex",
          }}
        >
          <Sidebar />
          <Component />
        </div>
      </main>
    </div>
  );
};
