import "./FooterComponent.scss";
import { CONSTANT } from "../../Utility/Constant";
import { memo } from "react";

export const FooterComponent: React.FC = memo(() => {
  const BASE_CLASSNAME: string = "footer";
  return (
    <footer className={BASE_CLASSNAME}>{CONSTANT.FOOTER_CONTENT_TEXT}</footer>
  );
});
