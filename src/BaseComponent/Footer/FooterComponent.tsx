import "./FooterComponent.scss";
import { CONSTANT } from "../../Utility/Constant";

export const FooterComponent: React.FC = () => {
  const BASE_CLASSNAME: string = "footer";
  return (
    <footer className={BASE_CLASSNAME}>{CONSTANT.FOOTER_CONTENT_TEXT}</footer>
  );
};
