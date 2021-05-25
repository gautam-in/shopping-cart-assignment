import styles from '../styles/login.module.scss';
import TextField from '@material-ui/core/TextField';
import { useRouter } from 'next/router'
import { useState } from 'react';
import { validate } from '../util/validate';

const Register = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        cnfPassword: ''
    });

    const [error, setError] = useState({});

    const onChangeHandler = (event) => {
        const formInputs = { ...formData };
        formInputs[event.target.name] = event.target.value

        setFormData(formInputs);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const { isValid, error } = validate(formData);
        if (!isValid) {
            setError(error);
        } else {
            const resetForm = {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                cnfPassword: ''
            }
            setFormData(resetForm);
            router.push('/')
        }
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <p className={styles.loginTitle}>SignUp</p>
                <p>We do not share your personal details with anyone</p>
            </div>
            <div className={styles.loginForm}>
                <form onSubmit={onSubmitHandler}>
                    <TextField
                        type="text"
                        required
                        label="First Name"
                        size="small"
                        name="firstName"
                        value={formData.firstName}
                        onChange={onChangeHandler}
                        error={!!error.firstName}
                        helperText={error.firstName}
                    />
                    <TextField
                        type="text"
                        required
                        label="Last Name"
                        size="small"
                        margin="normal"
                        name="lastName"
                        value={formData.lastName}
                        onChange={onChangeHandler}
                        error={!!error.lastName}
                        helperText={error.lastName}
                    />
                    <TextField
                        type="email"
                        required
                        label="Email"
                        size="small"
                        margin="normal"
                        name="email"
                        value={formData.email}
                        onChange={onChangeHandler}
                    />
                    <TextField
                        type="password"
                        required
                        label="Password"
                        size="small"
                        margin="normal"
                        name="password"
                        value={formData.password}
                        onChange={onChangeHandler}
                        error={!!error.password}
                        helperText={error.password}
                    />
                    <TextField
                        type="password"
                        required
                        label="Confirm Password"
                        size="small"
                        margin="normal"
                        name="cnfPassword"
                        value={formData.cnfPassword}
                        onChange={onChangeHandler}
                        error={!!error.cnfPassword}
                        helperText={error.cnfPassword}
                    />

                    <button>SignUp</button>
                </form>
            </div>
        </div>
    )
}

export default Register
