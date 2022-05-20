import {
    Input,
    Group,
    FormInputLabel
} from './form-input.styles';

const FormInput = ({label, inputOptions}) => {
    return (
        <Group>
            <Input {...inputOptions}/>
            <FormInputLabel shrink={inputOptions.value.length}>{label}</FormInputLabel>
        </Group>
    );
}

export default FormInput;