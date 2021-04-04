import SubmitButton  from '../../atoms/Button/SubmitButton'
import styles from './form.module.scss'
export default function Form({children,submit,disabled,buttonStyle,buttonText}) {

    return(
        <form onSubmit={submit} className={styles.formcontent}>
                {children}
            <SubmitButton disabled={disabled}  buttonStyle={buttonStyle} buttonText={buttonText}/>
        </form>
    )
}