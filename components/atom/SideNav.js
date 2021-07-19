import { useRouter } from "next/router";
import SideNavListStyles from "../styles/SideNavListStyles";
import SideNavStyles from "../styles/SideNavStyles";

export default function SideNav({ categories }) {
  if (!categories.length) return null;
  const router = useRouter();
  const categoryParam = router.query.category;
  const handleClick = (id) => {
    router.push(`/products?category=${id}`);
  };
  return (
    <SideNavStyles>
      <ul>
        {categories.map((category) => (
          <SideNavListStyles
            key={category.id}
            order={category.order}
            active={category.id === categoryParam}
            onClick={() => handleClick(category.id)}
          >
            {category.name}
          </SideNavListStyles>
        ))}
      </ul>
    </SideNavStyles>
  );
}
