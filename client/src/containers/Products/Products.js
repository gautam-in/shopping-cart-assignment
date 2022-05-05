import Product from "../../components/Product/Product";


const Products = ({data}) => {
  return data.map((val) => (
        <Product data={val} />
  ));
};

export default Products;
