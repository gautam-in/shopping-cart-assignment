import React from "react";
import styles from "./StoreHeader.module.css"
import Link from "next/link"
import Image from "next/image";
import logo from "../../assets/images/logo_2x.png"
import {Layout} from "antd";

const StoreHeader = (props) => {
    return(
        <Layout.Header className={styles["header-container"]}>
            <div>
                <Link href={"/"}>
                    <Image src={logo} alt={"Sabka Bazaar"} height={40} width={80}/>
                </Link>
            </div>
            <div>

            </div>
        </Layout.Header>
    )
}

export default StoreHeader