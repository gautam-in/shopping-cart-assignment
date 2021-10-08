import { ReactElement } from "react";
import Rows from "react-bootstrap/Row";

interface IProps {
  xs?: number;
  md?: number;
  lg?: number;
  children?: any;
  className?: string;
}

const Row = (props: IProps): ReactElement => {
  const { xs, md, lg, className } = props;
  return (
    <Rows noGutters={true} className={className} xs={xs} md={md} lg={lg}>
      {props.children}
    </Rows>
  );
};
export default Row;
