import { useState } from 'react'
import SEO from '../../components/SEO'
import classes from './registration.module.scss'

const RegistrationPage = () => {

    const [error, setError] = useState({})
    const [isEmailEmpty, setIsEmailEmpty] = useState(true)

    const checkEmptyEmail = (e) => {
        setIsEmailEmpty(!e.target.value.trim());
    }

    const validator = (field, value, compareValue) => {
        switch (field) {
            case 'email':
                const emailRegex = /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$/gm
                const isValid = emailRegex.test(value)
                if (isValid) return ''
                else return 'Email not valid'

            case 'password':
                if (value.length < 6) return 'Password should be minimum 6 characters long.'
                if (value.includes(' ')) return 'Passowrd shoud not contain space character.'
                if (/[a-zA-Z]/.test(value) && /\d/.test(value))
                    return 'Password should contain atleast one number and one alphabet'
                return ''

            case 'confirmPassword': return value !== compareValue ? 'Passwords do not match.' : ''

            default: return !!value ? '' : 'Invalid'
        }
    }

    const handleSubmit = (e) => {
        let isError = false
        e.preventDefault();

        const emailError = validator('email', e.target['email'].value)
        const passwordError = validator('password', e.target['password'].value)
        const confirmPasswordError = validator('confirmPassword', e.target['password'].value, e.target['confirmPassword'].value)

        if (!emailError || !passwordError || !confirmPasswordError) {
            isError = true
        }

        setError({
            ...error,
            email: emailError,
            password: passwordError,
            confirmPassword: confirmPasswordError
        })

        return !isError
    }

    return (
        <>
            <SEO />
            <section className={classes.container}>
                <section className={classes.registrationIntro}>
                    <h1>SignUp</h1>
                    <p>We do not share your personal details with anyone.</p>
                </section>

                <form className={classes.registrationForm} onSubmit={handleSubmit} action='/' method='post'>
                    <label className={classes.inputLabel}>
                        <input type='text' id='firstName' required className={classes.input} />
                        <span className={classes.placeholder}>First Name</span>
                    </label>

                    <label className={classes.inputLabel}>
                        <input type='text' id='lastName' required className={classes.input} />
                        <span className={classes.placeholder}>Last Name</span>
                    </label>

                    <label className={classes.inputLabel}>
                        <input
                            type='text'
                            id='email'
                            required
                            className={`${classes.input} ${isEmailEmpty ? 'empty' : ''}`}
                            onChange={checkEmptyEmail}
                            aria-invalid={!!error['email'] ? 'true' : 'false'}
                            aria-describedby={!!error['email'] ? 'emailError' : ''}
                        />
                        <span className={classes.placeholder}>Email</span>
                        {!!error['email'] && <p className={classes.inputError} id="emailError">&#9888; {error['email']}</p>}
                    </label>

                    <label className={classes.inputLabel}>
                        <input
                            type='password'
                            id='password'
                            required
                            className={classes.input}
                            aria-invalid={!!error['password'] ? 'true' : 'false'}
                            aria-describedby={!!error['password'] ? 'passwordError' : ''}
                        />
                        <span className={classes.placeholder}>Password</span>
                        {!!error['password'] && <p className={classes.inputError} id="passwordError">&#9888; {error['password']}</p>}
                    </label>

                    <label className={classes.inputLabel}>
                        <input
                            type='password'
                            id='confirmPassword'
                            required
                            className={classes.input}
                            aria-invalid={!!error['confirmPassword'] ? 'true' : 'false'}
                            aria-describedby={!!error['confirmPassword'] ? 'confirmPasswordError' : ''}
                        />
                        <span className={classes.placeholder}> Confirm Password</span>
                        {!!error['confirmPassword'] && <p className={classes.inputError} id="confirmPasswordError">&#9888; {error['confirmPassword']}</p>}
                    </label>

                    <button type='submit' className={classes.registrationButton}>Signup</button>
                </form>
            </section>
        </>
    )
}

export default RegistrationPage
