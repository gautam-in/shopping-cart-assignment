import Page from "../components/Page";


import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../store/reducer';
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const store = createStore(reducer);

function MyApp({Component,pageProps}) {
    console.log('PROPS',Component,pageProps)
    return (

        <Provider store={store}>
            <ThemeProvider theme={theme}>            
            <Helmet>
                <title>SABKA BAZAAR </title>
                <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@600&display=swap" rel="stylesheet"></link>
            </Helmet>
                <Page>
                    <Component {...pageProps} />
                </Page>
            </ThemeProvider>

        </Provider>
    );
}
export default MyApp;
