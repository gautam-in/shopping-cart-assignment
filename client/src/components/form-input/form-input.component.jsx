import {
  Group,
  FormInputLabel,
  Input,
  ErrorContainer,
} from './form-input.styles.jsx';

const FormInput = ({ label, errorMessage, ...otherProps }) => (
  <Group>
    <Input {...otherProps} className={errorMessage ? 'has-error' : ''} />
    {label && (
      <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
    )}
    {errorMessage && <ErrorContainer>{errorMessage}</ErrorContainer>}
  </Group>
);

export default FormInput;
