import styles from "./Wrapper.module.scss";

const MainWrap = ({ children }) => {
  return (
    <main className={styles["main-container"]}>
      <div className={styles["main-inner"]}>{children}</div>
    </main>
  );
};

export default MainWrap;
