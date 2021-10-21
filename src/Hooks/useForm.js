import {useState} from 'react';

export default function useForm(defaultValue={}){
    const [fieldValue,setfieldValue] = useState(defaultValue);

    const handleForm = (e)=>{
        setfieldValue({
            ...fieldValue,
            [e.target.name] : e.target.value,
        })
    }

    return{
        fieldValue,
        handleForm,
    }
}