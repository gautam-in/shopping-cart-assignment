import React from "react";
import styles from "./StoreHeader.module.css"
import { useRouter } from "next/router";
import Link from "next/link"
import Image from "next/image";
import logo from "../../assets/images/logo_2x.png"
import {Layout} from "antd";

const StoreHeader = (props) => {
    const router = useRouter();

    return(
        <Layout.Header className={styles["header-container"]}>
            <div style={{display: "flex"}}>
                <Link href={"/"}>
                    <Image src={logo} alt={"Sabka Bazaar"} height={40} width={80}/>
                </Link>
                <Link href={"/"}>Home</Link>
                <Link href={router.pathname.includes("products") ? "all" :"products/all"}>Products</Link>
            </div>
            <div>
                <div style={{display: "flex"}}>
                    <Link href={"/signup"}>Sign Up</Link>
                    <h3>/</h3>
                    <Link href={"/signin"}>Sign In</Link>
                </div>
                <div></div>
            </div>
        </Layout.Header>
    )
}

export default StoreHeader