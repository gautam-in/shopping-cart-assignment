import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';
import CartDrawer from './Drawer';
import UserAvatar from './User/UserAvatar';

export default function Header() {
  const router = useRouter();

  function handleLogoClick() {
    router.push('/');
  }

  return (
    <header className={styles.HeaderMainContainer} data-testid="header-component">

      <div className={styles.LogoAndProducts}>
        <div className={styles.HeaderLogo}>

          <Image src="/static/images/logo.png" layout="fill" objectFit="contain" alt="Logo" onClick={handleLogoClick} />

        </div>
        <div className={styles.HeaderProducts}>
          <Link href="/products">Products</Link>
        </div>
        <div className={styles.HeaderHome}>
          <Link href="/">Home</Link>
        </div>
      </div>
      <div className={styles.UserAndCart}>
        <div className={styles.HeaderUser}>
          <UserAvatar />
        </div>
        <div className={styles.HeaderCart}>
          <CartDrawer />
        </div>
      </div>
    </header>
  );
}
