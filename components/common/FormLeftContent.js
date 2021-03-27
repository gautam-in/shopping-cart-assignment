export default function FormLeftContent({heading,description,styles}) {
    return (
        <div className={styles.formleftcontent}>
                    <h2>{heading}</h2>
                    <p>{description}</p>
        </div>
    )
    
}