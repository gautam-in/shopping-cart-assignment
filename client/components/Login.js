import styles from '../styles/login.module.scss';
import TextField from '@material-ui/core/TextField';
import { useRouter } from 'next/router'

const Login = () => {

    const router = useRouter();

    return (
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <p className={styles.loginTitle}>Login</p>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className={styles.loginForm}>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    router.push('/')
                }}>
                    <TextField
                        type="email"
                        required
                        label="Email"
                        size="small"

                    />
                    <TextField
                        type="password"
                        required
                        label="Password"
                        size="small"
                        margin="normal"
                    />

                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
