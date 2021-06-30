import Category from '../components/organism/Category/Category'

function Home({pageProps}) {
  return (
    <Category {...pageProps}/>
  )
}

Home.getInitialProps = async function () {
  let pageProps = {};
  if (Category.getInitialProps) {
    pageProps = await Category.getInitialProps();
  }
  return { pageProps };
};

export default Home