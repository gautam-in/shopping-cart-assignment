import Products from "../../components/products";
import { useRouter } from "next/router";
function ProductsPage() {
  const router = useRouter();
  const items = router.query.item;
  console.log("items", items);

  return <Products catId={items && items.length > 0 ? items[0] : ""} />;
}

export default ProductsPage;
