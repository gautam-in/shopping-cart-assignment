import { useRouter } from 'next/router';

import { MenuWrapper } from 'styles/menuMobile.styled';

const MenuMobile = ({ categories }) => {
  const router = useRouter();

  return (
    <>
      <MenuWrapper
        onChange={(event) => {
          const { value } = event.target;

          router.push(`/products?categoryId=${value}`);
        }}
      >
        <option value={-1}>All</option>
        {categories &&
          categories.length > 0 &&
          categories.map((category) => {
            const { id, name } = category;

            return <option value={id}>{name}</option>;
          })}
      </MenuWrapper>
    </>
  );
};

export default MenuMobile;
