import Products from '../components/organism/Products/Products'

function ProductsIndex({pageProps}) {
  return (
    <Products {...pageProps}/>
  )
}

ProductsIndex.getInitialProps = async function () {
  let pageProps = {};
  if (Products.getInitialProps) {
    pageProps = await Products.getInitialProps();
  }
  return { pageProps };
};

export default ProductsIndex