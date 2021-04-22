import React from "react";
import ProductCard from '../Atoms/ProductCard'
import "../../styles/product-card.scss"


const ProductsSection = ({pList, catgry}) =>{

        return (
          <>
            <div className="container product_area_container" >
                <div className="grid">
                    {
                        pList.filter((item) => (catgry == null ? true : item.category === catgry))
                        .map((prod) =>
                            <ProductCard key={prod.id.toString()} product={prod} />
                        )
                    }
                </div>
            </div>
          </>
        );
}

export default ProductsSection;