import '../styles/globals.css'
import {useEffect} from "react";
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
    gql,
    createHttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import withApollo from 'next-with-apollo';
import 'antd/dist/antd.css';
import {AuthProvider, useAuth} from "../utils/AuthProvider"

import {endpoint} from "../config";
import {CartContext, useCartProvider} from "../utils/CartHelper";

//Progress bar on route
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({Component, pageProps, apollo}) {
    useEffect(() => {
        window.localStorage.setItem("asdf", "pppp")
        console.log("window", window.localStorage.getItem("asdf"))
    }, [])

    return (
        <AuthProvider>
            <CartContext.Provider value={useCartProvider()}>
                <ApolloProvider client={apollo}>
                    <Layout>
                        <StoreHeader/>
                        <Layout.Content style={{display: "flex", justifyContent: "center", flexDirection: "column", backgroundColor: "white", marginTop: "0.5vh", minHeight: "89vh"}}>
                            <Component {...pageProps} />
                        </Layout.Content>
                    </Layout>
                </ApolloProvider>
            </CartContext.Provider>
        </AuthProvider>
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

const httpLink = createHttpLink({
    uri: endpoint,
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token =  window ? localStorage.getItem('token') : "";
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

export default withApollo(({initialState}) => {
    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache().restore(initialState || {})
    });
})(MyApp);
