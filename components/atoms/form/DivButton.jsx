import styles from './divButton.module.scss';

export default function DivButton({content, clickHandler}) {
    return (
        <div className = {styles.divButton} onClick = {clickHandler}>
            {content}
        </div>
    )
}
