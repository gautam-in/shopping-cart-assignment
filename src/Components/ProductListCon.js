import "../Style/ProductList.scss";

function ProductListCon(props) {
    console.log(props, 'con');
    const { data } = props;
    return (
        <div className="ProductListCon">
            {data.map((ele, index) => (
                <div key={index} className="Product">
                    <div className="ProductName">{ele.name}</div>
                    <div className="ProductImage">
                        <img src={ele.imageURL} width="100%"/>
                    </div>
                    <div className="ProductDesc">{ele.description}</div>
                    <div className="BuyProductOption">
                        <div className="ProductPrice">MRP RS.{ele.price}</div>
                        <button className="BuyButton">Buy Now</button>
                    </div>
                </div>
            )) }
            
        </div>
    )
}

export default ProductListCon;