import { Input, Label, Error, TextFieldWrapper } from "./TextField.styles";

const TextField = ({
  name,
  id,
  labelText,
  error,
  hasInput,
  ...otherInputProps
}) => (
  <TextFieldWrapper error={error}>
    <Input id={id} name={name} title={labelText} {...otherInputProps}></Input>
    <Label hasInput={hasInput} htmlFor={id}>
      {labelText}
    </Label>
    {error && <Error aria-live="assertive">{error}</Error>}
  </TextFieldWrapper>
);

export default TextField;
