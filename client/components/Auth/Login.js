import styles from '../../styles/login.module.scss';
import TextField from '@material-ui/core/TextField';
import { useRouter } from 'next/router'
import useForm from '../../util/useForm';

const Login = () => {

    const router = useRouter();
    const { inputs, handleChange, resetForm } = useForm({
        email: '',
        password: ''
    });

    return (
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <p className={styles.loginTitle}>Login</p>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className={styles.loginForm}>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    console.log(inputs);
                    resetForm();
                    router.push('/')
                }} method="POST">
                    <TextField
                        type="email"
                        required
                        label="Email"
                        id="Email"
                        size="small"
                        name="email"
                        value={inputs.email}
                        onChange={handleChange}
                    />
                    <TextField
                        type="password"
                        required
                        label="Password"
                        size="small"
                        margin="normal"
                        name="password"
                        value={inputs.password}
                        onChange={handleChange}
                    />

                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
