import Product from "../../components/Product/Product";


const Products = ({data}) => {

  const handleClick = (product) => {
      console.log(product)
  }
  return data.map((val,i) => (
        <Product data={val} key={i} handleClick={handleClick}/>
  ));
};

export default Products;
