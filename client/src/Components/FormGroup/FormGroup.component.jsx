import {FormGroupComp,FormLabel,FormInput,FormError} from './FormGroup.styles';

const FormGroup = ({type,name,id,text,...props}) => {
    return (
        <FormGroupComp>
                    <FormInput  value={props.value} type={type} name={name} id={id} {...props}/>
                    <FormLabel className={props.value.length ? "shrink" : ''} htmlFor={id}>{text}</FormLabel>
                    {props.error && (<FormError>{props.error}</FormError>)}
        </FormGroupComp>
    )
}

export default FormGroup;