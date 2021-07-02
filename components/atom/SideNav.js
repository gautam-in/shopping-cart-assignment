import { useRouter } from "next/router";
import SideNavListStyles from "../styles/SideNavListStyles";
import SideNavStyles from "../styles/SideNavStyles";

export default function SideNav({ categories }) {
  const router = useRouter();
  const renderCategoryList = (categories) => {
    if (categories) {
      return categories.map((category) => {
        return (
          <SideNavListStyles
            key={category.id}
            order={category.order}
            active={category.id === router.query.category}
            onClick={() => router.push(`/products?category=${category.id}`)}
          >
            {category.name}
          </SideNavListStyles>
        );
      });
    } else {
      return <div>loading...</div>;
    }
  };
  return (
    <SideNavStyles>
      <ul>{renderCategoryList(categories)}</ul>
    </SideNavStyles>
  );
}
