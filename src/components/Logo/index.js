import { Link } from "react-router-dom";

import styles from "./logo.module.css";

const Logo = () => (
  <div className={styles.wrapper}>
    <Link to="/">
      <img
        alt=""
        className={styles.image}
        src={`/static/images/logo.png`}
        srcSet="static/images/logo.png, static/images/logo_2x.png 2x"
      />
    </Link>
  </div>
);

export default Logo;
