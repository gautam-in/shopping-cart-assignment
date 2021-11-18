import AsideStyles from "./styles/AsideStyles";
import ProductsList from "./ProductsList";
import { useState } from "react";


export default function Products({ categories,products}) {
 
  const [sortProducts, setSortProducts] = useState(products);


  const onClickSortProducts = (id) => {
    const filtered = products.filter((product) =>  product.category===id);
    setSortProducts(filtered);
  };

  

  return (
    <>
      <AsideStyles>
        <aside>
          {categories.map((item) => {
            return (
              <button
                onClick={() => {
                  onClickSortProducts(item.id)
                
                }}
                key={item.id}
              >
                <a>{item.name}</a>
                
              </button>
            );
          })}
        </aside>
        <ProductsList products = {sortProducts} />
      </AsideStyles>
    </>
  );
}
