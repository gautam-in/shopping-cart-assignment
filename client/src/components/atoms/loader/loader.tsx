import classNames from "classnames";
import { ReactElement } from "react";
import Spinner from "react-bootstrap/Spinner";
import "./loader.scss";

interface IProps {
  className?: string;
}

export default function Loader(props: IProps): ReactElement {
  const { className } = props;
  const wrapperClass = classNames("loader-container", className);

  return (
    <div className={wrapperClass}>
      <div className="loader" />
      <Spinner animation="border" role="status" />
    </div>
  );
}
