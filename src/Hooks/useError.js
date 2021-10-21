import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function useError() {
    const history = useHistory();
    const [error, setError] = useState({});

    const handleError = (e, regex) => {
        const name = e.target.name;
        const value = e.target.value;
        const isMatch = value.match(regex);
        if (value && regex) {
            isMatch ? setError({
                ...error,
                [name]: '',
            }) : setError({
                ...error,
                [name]: `${[name]} invalid`
            })
        } else {
            setError({
                ...error,
                [name]: `${[name]} required`,
            })
        }
    }

    const handleSubmit = (formvalue) => {
        if (formvalue.confirmPassword && formvalue.password != formvalue.confirmPassword) {
            setError({
                ...error,
                confirmPassword: 'confirm password should match password',
            })
        } else {
            const fields = Object.keys(formvalue);
            const hasError = Object.values(error).filter(err => err).length === 0;
            const values = fields.filter(value => formvalue[value])
            values.length === fields.length && hasError && history.push('/');
            console.log(formvalue, 'formvalue')
        }
    }

    return {
        error,
        handleError,
        handleSubmit,
    }
}