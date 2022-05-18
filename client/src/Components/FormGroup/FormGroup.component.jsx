import {FormGroupComp,FormLabel,FormInput} from './FormGroup.styles';

const FormGroup = ({type,name,id,text,...props}) => {
    return (
        <FormGroupComp>
                    <FormInput  value={props.value} type={type} name={name} id={id} {...props}/>
                    <FormLabel className={props.value.length ? "shrink" : ''} htmlFor={id}>{text}</FormLabel>
        </FormGroupComp>
    )
}

export default FormGroup;