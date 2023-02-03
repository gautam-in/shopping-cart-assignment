import './FormGroup.scss';

const FormGroup = ({type,name,id,text,...props}) => {
    return (
        <div className="formgroup">
                    <input className="formgroup_input"  value={props.value} type={type} name={name} id={id} {...props}/>
                    <label className={props.value.length ? "shrink" : ''} htmlFor={id}>{text}</label>
                    {props.error && (<p className='formgroup_error'>{props.error}</p>)}
        </div>
    )
}

export default FormGroup;