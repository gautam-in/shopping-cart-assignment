import styles from './text.module.scss'
export default function ErrorMessage({text}) {
    return(
        <p className={styles.error}>
            {text}
        </p>
    )
}