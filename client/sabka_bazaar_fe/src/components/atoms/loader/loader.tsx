import classNames from "classnames";
import { ReactElement } from "react";
import Spinner from "react-bootstrap/Spinner";
import "./loader.scss";

interface IProps {
  message: string;
  className?: string;
}

export default function Loader(props: IProps): ReactElement {
  const { message, className } = props;
  const wrapperClass = classNames("loader-container", className);

  return (
    <div className={wrapperClass}>
      <div className="loader" />
      <Spinner animation="border" role="status" />
      <span className="visually-hidden">{message}</span>
    </div>
  );
}
