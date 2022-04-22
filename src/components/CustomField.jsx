import { Component } from 'react';
import { Field } from 'formik';

class CustomField extends Component {
    render() {
        const { name, error, label, type = 'text' } = this.props;

        return (
            <div className="custom-form-group">
                <Field type={type} name={name} required autoComplete="off" />
                <label className="control-label">{label || name}</label><i className="bar"></i>

                <div className='error-message'>{error}</div>
            </div>
        );
    };
};
export default CustomField;