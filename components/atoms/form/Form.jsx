import styles from './form.module.scss';

export default function Form(props) {
    return (
        <form name = {props.name} action = {props.targetPage} className = {styles.basicform}>   
            {props.children}         
        </form>
    )
}
