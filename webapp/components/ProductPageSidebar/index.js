import {Layout} from "antd";
import styles from "./ProductPageSidebar.module.css";
import { useRouter } from 'next/router'
import classNames from "classnames";


export const ProductPageSidebar = (props) => {
    const router = useRouter();
    const { category_uid } = router.query;
    const onClickSiderBarItem = (category_uid) => {
        router.replace(category_uid);
    }
    return(
        <div className={styles["sidebar-container"]}>
            {props.categoryData.map((category) => (
                <div
                    className={classNames({
                        [styles["sidebar-item"]]: category_uid !== category.category_uid,
                        [styles["sidebar-active-item"]]: category_uid === category.category_uid
                    })}
                    key={category.category_uid}
                    onClick={(e) => {onClickSiderBarItem(category.category_uid)}}
                >
                    <h3>{category.name}</h3>
                </div>
            ))}
        </div>
    )
}
