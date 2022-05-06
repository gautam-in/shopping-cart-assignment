import Product from "../../components/Product/Product";


const Products = ({data,...rest}) => {

  return data.map((val,i) => (
        <Product data={val} key={i} {...rest}/>
  ));
};

export default Products;
