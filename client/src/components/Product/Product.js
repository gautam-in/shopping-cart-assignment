import { Fragment,memo } from "react";
import Tablet from "./Tablet";
import Mobile from "./Mobile";
import Desktop from "./Desktop";


const Product = ({data,...rest}) => {

  return (
    <Fragment>
        <Desktop data={data} {...rest} />
        <Tablet data={data} {...rest} />
        <Mobile data={data} {...rest} />
    </Fragment>
  );
};

export default memo(Product);
