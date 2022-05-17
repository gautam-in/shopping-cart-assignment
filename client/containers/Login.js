import classes from '../styles/login.module.scss';

const LoginPage = () => {
  return (
    <>
      <section className={classes.container}>
        <section className={classes.loginIntro}>
          <h1>Login</h1>
          <p>Get access to your Orders, Wishlist and Recommendation</p>
        </section>

        <form className={classes.loginForm} action='/' method='post'>
          <label className={classes.inputLabel}>
            <input type='email' required className={classes.input} />
            <span className={classes.placeholder}>Email</span>
          </label>

          <label className={classes.inputLabel}>
            <input type='password' required className={classes.input} />
            <span className={classes.placeholder}>Password</span>
          </label>

          <button type='submit' className={classes.loginButton}>
            Login
          </button>
        </form>
      </section>
    </>
  );
};

export default LoginPage;
