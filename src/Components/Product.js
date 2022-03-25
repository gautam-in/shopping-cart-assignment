import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SidePanel from "../Reusables/SidePanel.component";
import Tile from "../Reusables/Tile.component";

import "../Scss/product.scss";
import { get } from "../common";

function Product() {
    const [pro, setPro] = useState([]);
    const [categories, setCategories] = useState([]);

    const { filter } = useSelector((state) => state);

    useEffect(() => {
        get("products").then(({ data }) => {
            setPro(data);
        });
        
        get("categories").then(({ data }) => {
            setCategories(data);
        });
    }, []);

    return (
        <main className="pro-container">
            <SidePanel product={categories} />
            <section className="pro-wrapper">
                <ul className="pro-list" style={{
                    display: "flex", justifyContent: "flex-start", flexWrap: "wrap", padding: 0,
                    margin: 0,
                    listStyle: "none",
                }}>
                    {filter === null && pro.length > 0
                    ? pro.map((item)=><Tile details={item} key={item.id}/>):
                    pro.filter((item)=> item.category === filter).map((item) => <Tile details={item} key={item.id}/>)
                    }
                </ul>
            </section>
        </main>
    );

}

export default Product;