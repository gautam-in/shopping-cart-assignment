import styles from './form.module.scss'

export default function FormStaticContent({heading,description}) {
    return (
        <div className={styles.formstaticcontent}>
                    <h2>{heading}</h2>
                    <p>{description}</p>
        </div>
    )
    
}