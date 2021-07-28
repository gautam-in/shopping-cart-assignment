import styles from "./ProductCards.module.css";
import {Button} from "antd";

export const ProductCards = (props) => {
    const { productData } = props
    return(
        <div className={styles["cards-container"]}>
            {productData.map((product) => (
                <div className={styles["product-card"]}>
                    <h3><b>{product.name}</b></h3>
                    <img src={product.temp_url} alt={product.name} height={150} width={190}/>
                    <div className={styles["description-box"]}>
                        <p style={{fontSize: 12}}>{product.description}</p>
                    </div>
                    <div className={styles["price-container"]}>
                        <h4>{`MRP ₹${product.price}`}</h4>
                        <Button>
                            Buy Now
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    )
}