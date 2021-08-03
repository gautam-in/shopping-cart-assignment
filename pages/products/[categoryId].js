import { useRouter } from "next/router";
import Products from "../../components/products/Products";

export default function CategoryProducts() {
  const { query } = useRouter();

  return <Products categoryId={query.categoryId} />;
}
