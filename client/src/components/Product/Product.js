import { Fragment } from "react";
import Tablet from "./Tablet";
import Mobile from "./Mobile";
import Desktop from "./Desktop";


const Product = ({data}) => {
  return (
    <Fragment>
      <Desktop data={data} />
      <Tablet data={data} />
      <Mobile data={data} />
    </Fragment>
  );
};

export default Product;
