import React from "react";

const MainContent: React.FC<React.PropsWithChildren> = ({ children = "" }) => {
  return <main className="main-content">{children}</main>;
};

export default MainContent;
