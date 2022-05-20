import { useQuery, gql } from "@apollo/client";
import CardItem from "../card/card-item.component";
import "./products-list.style.css";

const PRODUCTS = gql`
  query ExampleQuery {
    productsForHome {
      id
      name
      imageURL
      description
      price
    }
  }
`;

const Products = () => {
  const { loading, error, data: products } = useQuery(PRODUCTS);
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error :{error.message}</p>;
  return (
    <>
      {products?.productsForHome?.map((product) => (
        <CardItem key={product.id} item={product} />
      ))}
    </>
  );
};
export default Products;
