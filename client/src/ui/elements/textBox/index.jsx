import './style.css';

const TextBox = (props) => {
    return (<div className="input-container">
        <input type="text" {...props} />
        <label>{props.label ?? ''}</label>
        {props.errorMessage && <span className='input-error-message'>{props.errorMessage}</span>}
    </div >)
}

export default TextBox;