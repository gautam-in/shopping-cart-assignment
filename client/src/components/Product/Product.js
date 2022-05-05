import { Fragment } from "react";
import Tablet from "./Tablet";
import Mobile from "./Mobile";
import Desktop from "./Desktop";


const Product = ({...rest}) => {
  return (
    <Fragment>
      <Desktop {...rest} />
      <Tablet {...rest} />
      <Mobile {...rest} />
    </Fragment>
  );
};

export default Product;
