import ErrorMessage from "../Text/ErrorMessage";

export default function Input({labelName,name,lablestyle,inputStyle,type,handleChange,errorMessage,handleBlur}){
    return(
        <label className={lablestyle}>
            {labelName}
            <input aria-label={labelName} aria-required="true" onChange={handleChange} onBlur={handleBlur} name={name} className={inputStyle} type={type}/>
            {errorMessage&&<ErrorMessage text={errorMessage}/>}
        </label>
    )
}