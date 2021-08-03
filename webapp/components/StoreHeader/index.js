import React from "react";
import styles from "./StoreHeader.module.css"
import {useRouter} from "next/router";
import Link from "next/link"
import Image from "next/image";
import logo from "../../assets/images/logo_2x.png"
import {Layout} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons"
import {useCart} from "../../utils/CartHelper";

const StoreHeader = (props) => {
    const router = useRouter();
    const onClickCart = () => {
        router.push("/cart")
    };

    const cart = useCart();
    return (
        <Layout.Header className={styles["header-container"]}>
            <div style={{display: "flex"}}>
                <Link href={"/"}>
                    <Image src={logo} alt={"Sabka Bazaar"} height={30} width={100} style={{cursor: "pointer"}}/>
                </Link>
                <div className={styles["nav-container"]}>
                    <Link href={"/"}>
                        <b><h3 className={styles["nav-button"]}>Home</h3></b>
                    </Link>
                    <Link href={router.pathname.includes("products") ? "all" : "products/all"}>
                        <b><h3 className={styles["nav-button"]}>Products</h3></b>
                    </Link>
                </div>
            </div>
            <div className={styles["right-box"]}>
                <div style={{display: "flex", height: "4vh"}}>
                    <Link href={"/signin"}>Sign In</Link>
                    <h3>/</h3>
                    <Link href={"/signup"}>Register</Link>
                </div>
                <div className={styles["cart-box"]} onClick={onClickCart}>
                    <ShoppingCartOutlined style={{fontSize: 30, color: "#ff0066"}}/>
                    <h3>{`${cart.getCartCount()} items`}</h3>
                </div>
            </div>
        </Layout.Header>
    )
}

export default StoreHeader