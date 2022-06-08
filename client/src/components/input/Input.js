import './input.css'
const Input=({label,...inputProps})=>{
    
    return(
        <div className="inputContainer">
            <label className='label'>{label}</label>
            <input {...inputProps} className="input"  ></input>
  
        </div>
    )
}
export default Input