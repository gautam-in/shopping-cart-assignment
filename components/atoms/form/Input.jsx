import { useState } from 'react'
import styles from './input.module.scss'

export default function Input({type, placeholder, name}) {
    const [value, setValue] = useState('');

    const inputChangeHandler = (e) => setValue(e.target.value);
    
    return (
        <input nmae ={name} className = {styles.inputElement} type = {type} placeholder = {placeholder} value = {value} onChange = {(e) => inputChangeHandler(e)} required/>
    )
}
