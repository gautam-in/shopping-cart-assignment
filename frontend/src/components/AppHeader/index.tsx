import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import appLogo from "../../../public/images/logo.png";
const RightSideNav = dynamic(() => import("./RightSideNav"), { ssr: false });
import styles from "./AppHeader.module.scss";

const AppHeader = () => {
  return (
    <>
      <header className={styles["head-section"]}>
        <div className={styles["app-header"]}>
          <Link href="/">
            <Image
              src={appLogo}
              alt="Sabka Bazaar logo"
              width={190}
              height={86}
            />
          </Link>
          <nav
            aria-labelledby="main-nav"
            className={styles["app-header--home-page-nav"]}
          >
            <div>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/product">Products</Link>
                </li>
              </ul>
            </div>
          </nav>
          <RightSideNav />
        </div>
      </header>
    </>
  );
};

export default AppHeader;
