import React from "react";

import "./InputFormElement.scss";

export default function InputFormElement({
  withLabel = true,
  lableProps = {},
  inputProps = {},
  labelText = "",
}) {
  return (
    <div className="InputFormElement">
      {withLabel && <label {...lableProps}>{labelText}</label>}
      <input {...inputProps} />
    </div>
  );
}
