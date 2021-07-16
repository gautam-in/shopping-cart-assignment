import styles from "./CategoryCards.module.css";
import classNames from "classnames";

export const CategoryCards = (props) => {
    return (
        <>
            {props.categories.map((category, index) => (
                <div className={classNames({
                    [styles["category-card-container"]]: index % 2 !== 0,
                    [styles["category-card-container-reverse"]]: index % 2 === 0
                })} key={category.key}>
                    <div>
                        <img src={category.temp_url} alt={category.key}/>
                    </div>
                </div>
            ))}
        </>
    )
}