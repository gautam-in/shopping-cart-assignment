import styles from  './NotFound.module.scss';
function NotFound(){
    return(
    <div className={styles.pageNotFound}>
      <h1>404</h1>
      <p>Page Not Found</p>
    </div>
    )
  }

  export default NotFound;