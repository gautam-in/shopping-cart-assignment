import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from '../Signup/signup.module.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * It takes in the user's email and password, checks if it matches the registered user's email and
 * password, and if it does, it will redirect the user to the account page
 * @returns A form that allows the user to login.
 */
export const Signin = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    const user = JSON.parse(localStorage.getItem('registeredUser'));

    /* If the email or password is incorrect, it will throw an error. */
    try {
      if (data.email !== user.email || data.password !== user.password) {
        toast.error('Email or Password is incorrect', { position: 'bottom-right' });
        return;
      }
      localStorage.setItem('activeUser', JSON.stringify(data));
      navigate('/account');
    } catch (error) {
      console.log(error);
      toast.error('User not found!', { position: 'bottom-right' });
      return;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.signupcontent}>
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className="group">
          <label className="form-input-label" htmlFor="email">
            Email
            <span aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            aria-required="true"
            name="email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          <span>{errors.email?.type && 'You must enter a valid email'}</span>
        </div>
        <div className="group">
          <label className="form-input-label" htmlFor="password">
            Password
            <span aria-hidden="true">*</span>
          </label>
          <input
            type="password"
            className="form-input"
            aria-required="true"
            {...register('password', { required: true })}
          />
          <span>{errors.password?.type && 'You must enter a Password'}</span>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Signin;
