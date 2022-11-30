import "../Style/ProductList.scss";

function ProductListCon(props) {
    const { data, addToCartList } = props;
    return (
        <div className="ProductListCon">
            {data.map((ele, index) => (
                <div key={index} className="Product">
                    <div className="ProductName">{ele.name}</div>
                    <div className="ProductImage">
                        <img src={ele.imageURL} width="100%" alt={ele.name} />
                    </div>
                    <div className="ProductDesc">{ele.description}</div>
                    <div className="BuyProductOption">
                        <div className="ProductPrice">MRP RS.{ele.price}</div>
                        <button className="BuyButton" onClick={() => addToCartList(ele)}>Buy Now</button>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default ProductListCon;