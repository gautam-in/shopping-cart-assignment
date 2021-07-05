import React from "react";
import styles from "./StoreHeader.module.css"
import Link from "next/link"
import Image from "next/image";
import logo from "../../assets/images/logo_2x.png"

const StoreHeader = (props) => {
    return(
        <div className={styles["header-container"]}>
            <div>
                <Link href={"/"}>
                    <Image src={logo} alt={"Sabka Bazaar"} height={40} width={80}/>
                </Link>
            </div>
            <div>

            </div>
        </div>
    )
}

export default StoreHeader