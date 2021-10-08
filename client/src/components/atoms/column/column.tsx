import { ReactElement } from "react";
import Col from "react-bootstrap/Col";

interface IProps {
  xs?: number;
  md?: number;
  sm?: number;
  lg?: number;
  children?: any;
  className?: string;
}

const Column = (props: IProps): ReactElement => {
  const { xs, md, lg, className, sm } = props;
  return (
    <Col className={className} sm={sm} xs={xs} md={md} lg={lg}>
      {props.children}
    </Col>
  );
};

export default Column;
