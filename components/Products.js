import { useEffect } from 'react';
import { useAppData } from '../lib/store';
import { BACKEND_URL } from '../config';
import RequestsHandler from '../lib/requestHandler';
import { ProductsStyle, SingleProductStyle } from './styles/ProductStyle';
import { DropdownStyle } from './styles/InputStyle';

import { ButtonStyle } from './styles/GlobalStyles';

export default function Products() {
  const contextData = useAppData();
  const { categories, products } = contextData?.data;
  // todo change this categories Data for flatten values values
  // const categoriesData = categories?.join('');
  useEffect(() => {
    if (categories.length === 0) {
      RequestsHandler.getData(`${BACKEND_URL}categories/`, {
        name: 'categories',
        setData: contextData.setData,
        state: contextData,
      });
    }
    if (products.length === 0) {
      RequestsHandler.getData(`${BACKEND_URL}products/`, {
        name: 'products',
        setData: contextData.setData,
        state: contextData,
      });
    }
  }, [categories.length, contextData.setData, products.length]);
  console.log(contextData);
  return (
    <ProductsStyle>
      <aside>
        <DropdownStyle>
          <select>
            <option>--Select Filter--</option>
            {categories.map((category, index) => (
              <option key={index} value={category.key}>
                {category.name}
              </option>
            ))}
          </select>
          <div className="select_arrow" />
        </DropdownStyle>
      </aside>
      <div>
        {products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </ProductsStyle>
  );
}

function SingleProduct({ product }) {
  console.log(product);
  return (
    <SingleProductStyle>
      <h2>{product?.name}</h2>
      <div>
        <img src={product?.imageURL} alt={product?.name} />
        <div>
          <p>{product?.description}</p>
          <ButtonStyle>Buy Now @ MRP Rs.{product?.price}</ButtonStyle>
        </div>
      </div>
    </SingleProductStyle>
  );
}
