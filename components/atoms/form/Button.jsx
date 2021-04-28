import styles from './button.module.scss';

export default function Button( {name, onClickMethod, type})  {
    return (
        <button type = {type} className = {styles.btn} onClick = {onClickMethod}>{name}</button>
    )
}
