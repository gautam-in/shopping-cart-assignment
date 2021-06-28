import '../styles/globals.css'
import PageLayout from '../components/templates'

function MyApp({ Component, pageProps }) {
  return (
    <PageLayout> 
     <Component {...pageProps} />
    </PageLayout>
  )
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  console.log("hi here i am",ctx);
  if (Component.getInitialProps) {
    console.log(Component,"having these props")
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default MyApp
