export default function  SubmitButton({buttonStyle,buttonText,disabled}){
    return(
        <button disabled={disabled} className={buttonStyle}>
            {buttonText}
        </button>
    )
}