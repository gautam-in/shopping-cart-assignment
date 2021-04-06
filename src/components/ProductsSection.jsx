import React from "react";
import "../styles/product-card.scss"

function ProductCard(props) {
    const name = props.name;
    const imageUrl = 'http://localhost:8081' + props.imageUrl;
    const description = props.description;
    const price = props.price;
    const stock = props.stock;
    const category = props.category;
    const id = props.id;
    const sku = props.sku;
    
    const imageAlign = props.imageAlign;

    return (
        <div className="product-card">
            <div className="product-title"><h3>{name}</h3></div>
            <div className="product-image"><img src={imageUrl} alt={name} /></div>
            <div className="product-short-description" alt={description}><span>{description.toString().split('').slice(0, 115).join('')}</span></div>
            <div className="product-card-footer">
                <div className="product-price"><span>MRP Rs.{price}</span></div>
                <div className="buy-button-container"><button className="btn-primary">Buy Now</button></div>
            </div>
        </div>      
    );
  }

export default class ProductsSection extends React.Component{
    
    state = {
        loading: true,
        products: null
    };
    
    async componentDidMount(){
        const url = "http://localhost:8081/products/";

        let responseJSON = localStorage.getItem(url);
        if(!responseJSON){
            const response = await fetch(url, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                cache: 'no-cache' // *default, no-cache, reload, force-cache, only-if-cached
              });
            
            responseJSON = await response.json();

            localStorage.setItem(url, JSON.stringify(responseJSON));
        }else{
            responseJSON = JSON.parse(responseJSON);
        }

        responseJSON = (responseJSON).sort(function(a, b){
            return a.order - b.order;
        });
        
        this.setState({loading: false, products: responseJSON});
        console.log(responseJSON);
    }

    render() {
        if (this.state.loading) {
          return (
                <>
                    <div className="container product_area_container" ></div>
                </>
            );
        }
    
        if (!this.state.products) {
          return <div className="container product_area_container" ><p>No products to showcase</p></div>;
        }
    
        return (
          <>
            <div className="container product_area_container" >
                <div className="grid">
                    {this.state.products.map((product, index) =>
                            <ProductCard key={product.id.toString()} id={product.id.toString()} name={product.name} imageUrl={product.imageURL} description={product.description} price={product.price} />
                    )}
                </div>
            </div>
          </>
        );
      }
}