import AppHeader from "@/components/AppHeader";
import React from "react";

const AppLayout: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <AppHeader />
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default AppLayout;
