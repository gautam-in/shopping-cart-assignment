import React from 'react'

export default function Product() {
    return (
        <section className="ProductPage">
            <div className="Productpage_Container">

                <div className="Thumbnail_Container">
                    <img className="drift-demo-trigger"
                        src="https://awik.io/demo/webshop-zoom/shoe-small.jpg" />
                </div>


                <div className="Details_Container">
                    <h1>Air Jordan 1 Retro</h1>
                    <p className="price">$95.99</p>
                    <p className="description">A remarkable shoe that's naturally soft, cozy all over, and fits your every move.</p>



                    <div className="Button_Container">

                        <div className="column" id="wishlist-container">

                            <button className="button">
                                <span className="icon is-small">
                                    <i className="fas fa-heart"></i>
                                </span>
                                <span>ADD TO WISHLIST</span>
                            </button>

                        </div>

                        <div className="column" id="buy-container">

                            <button className="button buy-button">
                                <span className="icon is-small">
                                    <i className="fas fa-shopping-bag"></i>
                                </span>
                                <span>ADD TO BAG</span>
                            </button>

                        </div>

                    </div>

                    <p className="small-text"><span>Standard delivery</span> 2-5 working days</p>
                    <p className="small-text"><span>Next day delivery</span> order before 2pm ($5.79)</p>

                </div>

            </div>

        </section >
    )
}
