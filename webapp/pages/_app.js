import '../styles/globals.css'
import {Layout} from "antd"
import StoreHeader from "../components/StoreHeader";
import Router from "next/router"
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";
import withApollo from 'next-with-apollo';
import 'antd/dist/antd.css';

import {endpoint} from "../config";

//Progress bar on route
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({Component, pageProps, apollo}) {
    console.log("asdf", pageProps)
    return (
        <ApolloProvider client={apollo}>
            <Layout>
                <StoreHeader/>
                <Layout.Content style={{display: "flex", justifyContent: "center", flexDirection: "column", padding: 20, backgroundColor: "white", marginTop: 5}}>
                    <Component {...pageProps} />
                </Layout.Content>
            </Layout>
        </ApolloProvider>
    )
}

MyApp.getInitialProps = async function ({Component, ctx}) {
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return {pageProps};
};

export default withApollo(({initialState}) => {
    return new ApolloClient({
        uri: endpoint,
        cache: new InMemoryCache().restore(initialState || {})
    });
})(MyApp);
