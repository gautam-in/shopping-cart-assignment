/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */

function InputField({
  type,
  label,
  onChange,
}: {
  type: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="form-group">
      <input type={type} required onChange={onChange} />
      <label>{label}</label>
    </div>
  );
}

export default InputField;
