import styles from "./CategoryCards.module.css";
import classNames from "classnames";
import {Button} from "antd";

export const CategoryCards = (props) => {
    return (
        <>
            {props.categories.map((category, index) => (
                <div className={classNames({
                    [styles["category-card-container"]]: index % 2 === 0,
                    [styles["category-card-container-reverse"]]: index % 2 !== 0
                })} key={category.key}>
                    <div>
                        <img src={category.temp_url} alt={category.key} style={{height: "25vh", width: "25vw"}}/>
                    </div>
                    <div className={styles["category-detail-container"]} >
                        <h1><b>{category.name}</b></h1>
                        <h5>{category.description}</h5>
                        <Button className={styles["explore-button"]}>
                            <p style={{color: "white", fontSize: "1vw"}}>{`Explore ${category.name}`}</p>
                        </Button>
                    </div>
                </div>
            ))}
        </>
    )
}