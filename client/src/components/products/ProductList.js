import React from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cart';

function ProductList(props) {
    
    return (
        <section className="product-list">
            {props.list.length > 0 && props.list.map(product => (
                <div className="product-card" key={product.id}>
                    <div className="product-name">
                        {product.name}
                    </div>
                    <div className="product-image">
                        <img src={product.imageURL} alt={product.name} />
                    </div>
                    <div className="product-description">
                        {product.description}
                    </div>
                    <div className="product-footer">
                        <div className="price">
                            {product.price}
                        </div>
                        <div className="btn-buynow">
                            <button
                            aria-label = "Add to cart"
                                onClick={() => {
                                    props.addToCart({
                                        item: {
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                            quantity: 1,
                                            imageURL: product.imageURL
                                        }
                                    })
                                }}>
                                Buy Now
                                <span className = "price-mobile"> @ Rs.{product.price}</span>
                                </button>
                        </div>
                    </div>
                </div>
            ))
            }
        </section>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps, { addToCart })(ProductList);