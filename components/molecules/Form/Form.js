import SubmitButton  from '../../atoms/Button/SubmitButton'
export default function Form({children,submit,disabled,formStyle,buttonStyle,buttonText}) {

    return(
        <form onSubmit={submit} className={formStyle}>
                {children}
            <SubmitButton disabled={disabled}  buttonStyle={buttonStyle} buttonText={buttonText}/>
        </form>
    )
}