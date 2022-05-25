
import styles from '../styles/arrow.module.css'
function Arrow(props) {
    const {next , onClick,currentSlide,slideCount} = props
    let disableNext = currentSlide == slideCount -1  ? styles.disable: ''
    let disablePrev = currentSlide == 0  ?  styles.disable: ''

  return (
      <>    
        {
        next ? <>
        <div className={`${styles.next} ${styles.arrow} ${disableNext}`} onClick={onClick}>
            <p  >NEXT</p>
        </div>
        </>: <>
        <div className={`${styles.prev} ${styles.arrow} ${disablePrev}`} onClick={onClick}>
            <p>PREV</p>
        </div>
        </>
        }
      </>
  );
}

export default Arrow;
