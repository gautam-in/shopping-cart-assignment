import styles from '../../styles/login.module.scss';
import TextField from '@material-ui/core/TextField';
import { useRouter } from 'next/router'
import { useState } from 'react';
import { validate } from '../../util/validate';
import useForm from '../../util/useForm';

const Register = () => {

    const router = useRouter();

    const { inputs, handleChange, resetForm } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        cnfPassword: ''
    });

    const [error, setError] = useState({});

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(inputs);
        const { isValid, error } = validate(inputs);
        if (!isValid) {
            setError(error);
        } else {
            resetForm();
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
                <form onSubmit={onSubmitHandler} method="POST">
                    <TextField
                        type="text"
                        required
                        label="First Name"
                        id="First Name"
                        size="small"
                        name="firstName"
                        value={inputs.firstName}
                        onChange={handleChange}
                        error={!!error.firstName}
                        helperText={error.firstName}
                    />
                    <TextField
                        type="text"
                        required
                        label="Last Name"
                        id="Last Name"
                        size="small"
                        margin="normal"
                        name="lastName"
                        value={inputs.lastName}
                        onChange={handleChange}
                        error={!!error.lastName}
                        helperText={error.lastName}
                    />
                    <TextField
                        type="email"
                        required
                        label="Email"
                        id="Email"
                        size="small"
                        margin="normal"
                        name="email"
                        value={inputs.email}
                        onChange={handleChange}
                    />
                    <TextField
                        type="password"
                        required
                        label="Password"
                        id="Password"
                        size="small"
                        margin="normal"
                        name="password"
                        value={inputs.password}
                        onChange={handleChange}
                        error={!!error.password}
                        helperText={error.password}
                    />
                    <TextField
                        type="password"
                        required
                        label="Confirm Password"
                        id="Confirm Password"
                        size="small"
                        margin="normal"
                        name="cnfPassword"
                        value={inputs.cnfPassword}
                        onChange={handleChange}
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
