import { Component } from 'react';
import { Field } from 'formik';
import ErrorMessageStyled from './styled/ErrorMessage.styled';

class CustomField extends Component {
    render() {
        const { name, error, label, type = 'text' } = this.props;

        return (
            <div className="custom-form-group">
                <Field type={type} name={name} required autoComplete="off" />
                <label className="control-label">{label || name}</label><i className="bar"></i>

                <ErrorMessageStyled>
                    {error}
                </ErrorMessageStyled>
            </div>
        );
    };
};
export default CustomField;