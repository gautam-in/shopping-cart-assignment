import React from "react";

import { ActiveProvider } from "../../Library/context";
import ActiveLayout from "../../Layout";

const ActiveContainer = props => {
  const { component: Component, ...rest } = props;
  
  return (
    <>
      <ActiveProvider
        value={{
          ...rest
        }}
      >
        <ActiveLayout>
          <Component />
        </ActiveLayout>
      </ActiveProvider>
    </>
  )
};

export default ActiveContainer;
