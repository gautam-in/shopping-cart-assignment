import useForm from '../../Hooks/useForm';
import Input from '../Form/Input';
import Button from '../Button/Button';
import css from './User.module.css';
function Login(){
    let {inputs, handleChange}=useForm();
    return <div className={css.LoginContainer}>
                <div className="flex-fill">
                    <h1>Login</h1>
                    <p>Get access to your Orders, Wishlist and Recommendations</p>
                </div>
                <div className="flex-fill">
                <form action="">
                    <Input name="email" handleChange={handleChange} value={inputs.email} type="email" required id="email" label="Email"/>
                    <Input name="password" handleChange={handleChange} value={inputs.password} type="password" required id="password" label="Password"/>
                    <Button block type="submit">Login</Button>
                </form>
                </div>
        </div>
}

export default Login;