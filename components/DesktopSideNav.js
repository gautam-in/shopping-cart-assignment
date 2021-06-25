import { useRouter } from "next/router";
import SideNavListStyles from "./styles/SideNavListStyles";
import SideNavStyles from "./styles/SideNavStyles";

export default function DesktopSideNav({ categories }) {
  const router = useRouter();
  const categoryQuery =router.query.category;
  const onCategoryChange = (category) =>{
    let listElements = document.querySelectorAll('.active');
    listElements.forEach(items => items.classList.remove('active'));
    document.getElementById(category.id).classList.add('active')
    if(!categoryQuery || categoryQuery !== category.id){
      router.push(`/products?category=${category.id}`)
    }
    else{
      router.push('/products');
    }
  
  }
  const renderCategoryList = (categories,categoryQuery) => {
    if (categories) {
      return categories.map((category) => {
        return (
          <SideNavListStyles
            className={category.id === categoryQuery ? 'active' : ''}
            key={category.id}
            order={category.order}
            onClick={() => onCategoryChange(category)}
            id={category.id}
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
      <ul>{renderCategoryList(categories,categoryQuery)}</ul>
    </SideNavStyles>
  );
}
