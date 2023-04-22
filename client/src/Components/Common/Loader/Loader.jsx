import styles from "./Loader.module.scss";
function Loader() {
  return (
    <div className={styles.loader} role="alert" aria-live="assertive">
      <div className={styles.loader__content}>
        <div className={styles.loader__spin}></div>
        <p className={styles.loader__text}>Loading...</p>
      </div>
    </div>
  );
}

export default Loader;
