import Login from '../components/Login';
import styles from '../styles/LoginPage.module.css';

export default function LoginPage() {
  return (
    <div className={styles.LoginPageContainer}>
      <div className={styles.LoginPageBanner}>
        <div className={styles.LoginBannerContent}>
          <div className={styles.LoginBannerHeading}>
            Login
          </div>
          <div className={styles.LoginBannerDetail}>
            Get access to your orders, wishlist and recommendations.
          </div>
        </div>
      </div>
      <div className={styles.LoginPageLoginComponent}>
        <Login />
      </div>
    </div>
  );
}
