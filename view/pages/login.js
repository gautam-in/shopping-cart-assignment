import SignIn from "../modules/auth/SignIn";
import style from "../styles/Auth.module.scss";
export default function Login(props) {
  return (
    <>
      <div className={style.container}>
        <div className={style.details}>
          <h1>Login</h1>
          <p>Get access to your Orders,Whishlist and Recommendations</p>
        </div>
        <div className={style.component}>
          <SignIn />
        </div>
      </div>
    </>
  );
}
