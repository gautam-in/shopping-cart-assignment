import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useForm = (validate) => {
    const [values, setValues] = useState({
        form: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirm_password: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        console.log(value, values)
    };

    const handleKeyPress = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        setErrors(validate(values));
    }

    const handleSubmit = (e) => {
        const { localName, id } = e.target.form;
        console.log(e.target.form.id, e);
        setValues({
            ...values,
            [localName]: id
        });
        console.log(isSubmitting, errors);
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                localStorage.setItem('userData', JSON.stringify(values));
                navigate('/', { replace: true });
            }
        },
        [errors]
    );

    return { handleKeyPress, handleChange, handleSubmit, values, errors };
};

export default useForm;