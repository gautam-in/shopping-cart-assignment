import '../styles/globals.css'
import {Layout} from "antd"
import StoreHeader from "../components/StoreHeader";
import Router from "next/router"
import NProgress from "nprogress";
import "nprogress/nprogress.css"

//Progress bar on route
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError",() => NProgress.done());

function MyApp({Component, pageProps}) {
    console.log("asdf", pageProps)
    return (
        <>
            <Layout>
                <Layout.Content>
                    <Layout.Header>
                        <StoreHeader/>
                    </Layout.Header>
                    <Component {...pageProps} />
                </Layout.Content>
            </Layout>
        </>
    )
}

export default MyApp
