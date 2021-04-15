import styles from './text.module.scss'

export default function SuccessMessage({text}) {
    return(
        <p className={styles.success}>
            {text}
        </p>
    )
}     