import {Provider} from "react-redux";
import App from "next/app";
import makeStore from "../store/store";
import '../styles/style.scss'

const store = makeStore()
class MyApp extends App {

    static async getInitialProps({Component, ctx}) {
        // we can dispatch from here too
        let pageProps = {};
            if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)   
            }
            pageProps.query = ctx.query;
            return {pageProps}
    }

    render() {
        const {Component, pageProps} = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }

}
export default MyApp;
