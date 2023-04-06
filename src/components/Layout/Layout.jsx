import React from 'react';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';

const Layout = (props) => {
  const compName = props.children.type.name;
  const noFooterComponents = ['Cart'];
  return (
    <div>
      <Header />
      {props.children}
      {!noFooterComponents.includes(compName) && <Footer />}
    </div>
  );
};

export default Layout;
