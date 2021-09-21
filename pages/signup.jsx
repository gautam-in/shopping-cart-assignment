import Signup from '../components/Signup';
import styles from '../styles/SignupPage.module.css';

export default function SignupPage() {
  return (
    <div className={styles.SignupPageContainer}>
      <div className={styles.SignupPageBanner}>
        <div className={styles.SignupBannerContent}>
          <div className={styles.SignupBannerHeading}>
            Signup
          </div>
          <div className={styles.SignupBannerDetail}>
            We do not share your details with everyone.
          </div>
        </div>
      </div>
      <div className={styles.SignupPageLoginComponent}>
        <Signup />
      </div>
    </div>
  );
}
