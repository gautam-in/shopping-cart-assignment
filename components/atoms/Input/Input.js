import ErrorMessage from "../Text/ErrorMessage";

export default function Input({labelName,name,lablestyle,inputStyle,type,handleChange,errorMessage}){
    return(
        <label className={lablestyle}>
            {labelName}
            <input aria-label={labelName} aria-required="true" onChange={handleChange} name={name} className={inputStyle} type={type}/>
            {errorMessage&&<ErrorMessage text={errorMessage}/>}
        </label>
    )
}