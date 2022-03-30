import {useState, useEffect} from 'react';

const useForm = (initialValues, callback, validate) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        // Only validate if the validate function is used
        console.log('!!!$$$$$$', errors);
        if (validate) {
            console.log(errors);

            setErrors(validate(values));
        }
        setIsSubmitting(true);
    };

    const handleChange = (event) => {
        event.persist();
        const {
            target: {name},
        } = event;
        delete errors[name];
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };

    return {
        handleChange,
        handleSubmit,
        values,
        setValues,
        errors,
    };
};

export default useForm;
