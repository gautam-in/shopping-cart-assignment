
import {
  Fragment,
  type FunctionComponent,
} from "react";

const GenericImageLoader: FunctionComponent = (props: any) => (
  <Fragment>
    <img src={require(`.${props?.imgPath}`)} alt={props?.alt} className={props?.class}/>
  </Fragment>
);

export default GenericImageLoader;
