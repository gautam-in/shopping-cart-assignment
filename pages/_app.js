import '../styles/globals.scss';
import '../styles/grid.css';

import React from 'react'
import { wrapper } from '../redux/store' 


const MyApp = ({ Component, pageProps}) => (
  <Component {...pageProps} />
)

export default wrapper.withRedux(MyApp);



// class MyApp extends App {
//   static async getInitialProps({ Component, ctx}) {
//     const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    
//     console.log(appProps);
//     return { appProps : appProps }
//   }

//   render() {
//     const { Component, appProps } = this.props;

//     return(
//       <Provider store = {store}>
//         <Component {...appProps} />
//       </Provider>
//     )
//   }
// }
