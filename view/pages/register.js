import SignUp from "../modules/auth/SignUp";
import style from "../styles/Auth.module.scss";
export default function Register(props) {
  return (
    <>
      <div className={style.container}>
        <div className={style.details}>
          <h1>Signup</h1>
          <p>We do not share your personal details with anyone</p>
        </div>
        <div className={style.component}>
          <SignUp />
        </div>
      </div>
    </>
  );
}
