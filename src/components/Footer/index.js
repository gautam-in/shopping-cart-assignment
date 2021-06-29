import React from "react";

const Text = React.lazy(() => import(/* webpackChunkName: "FooterTextComponent" */ "../Text"));

import "./style.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <Text>
          Copyright &copy; 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
        </Text>
      </footer>
    </>
  );
};

export default Footer;
