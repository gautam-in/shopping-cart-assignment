import { useState } from "react";
import classNames from "classnames";
import "./InputTextBoxComponent.scss";

interface IInputTextBoxComponent {
  id: string;
  type: string;
  name?: string;
  labelAndPlaceholder?: string;
  styleClassName?: string;
}

export const InputTextBoxComponent: React.FC<IInputTextBoxComponent> = (
  props
) => {
  const { id, type, labelAndPlaceholder } = props;
  const [isFocused, setFocus] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string | undefined>(
    labelAndPlaceholder
  );
  const [isFieldNotEmpty, setNotFieldNotEmpty] = useState<boolean>(false);

  const BASE_CLASSNAME: string = "input-textbox";
  const LABEL_BASE_CLASSNAME: string = classNames({
    "input-textbox_label": true,
    "input-textbox_label--focus": isFocused || isFieldNotEmpty,
  });
  const INPUT_BASE_CLASSNAME: string = classNames({
    "input-textbox_input": true,
    "input-textbox_input--focus": isFocused || isFieldNotEmpty,
  });

  function onInputTextBoxBlur(e: any) {
    if (
      e.target.value !== null &&
      e.target.value !== undefined &&
      e.target.value !== ""
    ) {
      setNotFieldNotEmpty(true);
    } else {
      setPlaceholder(labelAndPlaceholder);
    }
    setFocus(false);
  }

  function onInputTextBoxFocus(e: any) {
    setFocus(true);
    setPlaceholder(undefined);
  }

  return (
    <div className={BASE_CLASSNAME}>
      <label htmlFor={id} className={LABEL_BASE_CLASSNAME}>
        {labelAndPlaceholder}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={INPUT_BASE_CLASSNAME}
        onFocus={(e) => onInputTextBoxFocus(e)}
        onBlur={(e) => onInputTextBoxBlur(e)}
      />
    </div>
  );
};
