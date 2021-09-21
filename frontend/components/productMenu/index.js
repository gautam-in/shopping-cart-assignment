import Link from 'next/link';

import {
  ProductMenuWrapper,
  ProductMenuContent,
} from 'styles/productMenu.styled';

import { useCategories } from 'utils/contexts/categories';

import MenuMobile from './menuMobile';

const ProductMenu = () => {
  const { categories } = useCategories();

  return (
    <>
      <ProductMenuWrapper>
        <ProductMenuContent>
          {categories &&
            categories.length > 0 &&
            categories.map((category) => {
              const { id, name } = category;

              return <Link href={`/products?categoryId=${id}`}>{name}</Link>;
            })}
        </ProductMenuContent>
      </ProductMenuWrapper>
      <MenuMobile categories={categories} />
    </>
  );
};

export default ProductMenu;
