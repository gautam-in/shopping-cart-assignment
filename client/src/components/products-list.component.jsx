import { useQuery, gql } from "@apollo/client";
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
  const { loading, error, data } = useQuery(PRODUCTS);
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error :{error.message}</p>;
  return (
    <>
      {data?.productsForHome?.map((d) => {
        return (
          <div className="product-card" key={d.id}>
            <div className="productName">
              <h1>{d.name}</h1>
            </div>
            <div className="productDetails">
              <img
                alt={d.name}
                // src="../../../static/images/products/beverages/coke.jpg"
                src="https://m.media-amazon.com/images/I/61QKKsgtVqL._SX522.jpg"
                width="250"
                height="250"
              />
              <p>{d.description}</p>
            </div>
            <div className="productPrice">
              <h5>MRP Rs.{d.price}</h5>
              <button>Buy Now</button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Products;
