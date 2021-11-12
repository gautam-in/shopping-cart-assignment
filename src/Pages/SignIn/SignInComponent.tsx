import { FormEvent } from "react";

import "./SignInComponent.scss";
import { CONSTANT } from "../../Utility/Constant";
import { InputSubmitButtonComponent } from "../../BaseComponent/InputButton/InputSubmitButtonComponent";
import { InputTextBoxComponent } from "../../BaseComponent/InputTextBox/InputTextBoxComponent";

export const SignInComponent: React.FC = () => {
  const BASE_CLASSNAME: string = "sign-in";
  const PAGE_HEADER_CLASSNAME: string = `${BASE_CLASSNAME}_page-header`;
  const HEADER_HEADING_CLASSNAME: string = `${PAGE_HEADER_CLASSNAME}_heading`;
  const HEADER_SUBSECTION_CLASSNAME: string = `${PAGE_HEADER_CLASSNAME}_subsection`;
  const PAGE_CONTENT_CLASSNAME: string = `${BASE_CLASSNAME}_page-content`;
  const BUTTON_PAGE_CONTENT_CLASSNAME: string = `${PAGE_CONTENT_CLASSNAME}_button`;

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Subbmitted");
  };

  return (
    <div className={BASE_CLASSNAME}>
      <div className={PAGE_HEADER_CLASSNAME}>
        <h1 className={HEADER_HEADING_CLASSNAME}>
          {CONSTANT.SIGNIN_PAGE_LOGIN_HEADER}
        </h1>
        <p className={HEADER_SUBSECTION_CLASSNAME}>
          {CONSTANT.SIGNIN_PAGE_HEADER_SUBSECTION}
        </p>
      </div>
      <form onSubmit={handleFormSubmit} className={PAGE_CONTENT_CLASSNAME}>
        <InputTextBoxComponent
          id="email"
          type="email"
          name="email"
          labelAndPlaceholder="Email"
        />
        <InputTextBoxComponent
          id="password"
          type="password"
          name="password"
          labelAndPlaceholder="Password"
        />
        <InputSubmitButtonComponent
          id="login"
          buttonName="Login"
          externalClassName={BUTTON_PAGE_CONTENT_CLASSNAME}
        />
      </form>
    </div>
  );
};
