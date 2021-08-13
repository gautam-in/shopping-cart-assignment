import {Spin} from 'antd';
import styles from "./Loading.module.css"

export const Loading = (props) => {
    return (
        <div className={styles["loader-container"]}>
            <Spin size={"large"}/>
        </div>)
}