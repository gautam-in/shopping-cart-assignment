import './style.css';

const TextBox = (props) => {
    return (<div className="input-container">
        <input type="text" {...props} />
        <label>{props.label ?? ''}</label>
    </div>)
}

export default TextBox;