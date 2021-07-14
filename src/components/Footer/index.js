import React, { Suspense } from "react";

const Text = React.lazy(() =>
  import(/* webpackChunkName: "FooterTextComponent" */ "../Text")
);

import "./style.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Suspense fallback={null}>
          <Text>
            Copyright &copy; 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
          </Text>
        </Suspense>
      </footer>
    </>
  );
};

export default Footer;
