import "./textField.css";

function TextField({ id, label, style, value, onChange, innerRef,...rest }) {
  const isEmpty = String(value || "").length === 0;
  const isFilled = !isEmpty;

  return (
    <div
      className={[
        "TextField",
        isEmpty ? "TextField__isEmpty" : "",
        isFilled ? "TextField__isFilled" : ""
      ].join(" ")}
      style={style}
    >
      <label className="TextField_label" htmlFor={id} id={`${id}_label`}>
        {label}
      </label>
      <input
        {...rest}
        className="TextField_input"
        id={id}
        value={value}
        onChange={onChange}
        ref={innerRef}
      />
    </div>
  );
}

export default TextField;
