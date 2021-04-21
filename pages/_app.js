// pages/_app.js
import React from "react";
import {Provider} from "react-redux";
import App from "next/app";
import makeStore from "../redux_store";
import 'bootstrap/dist/css/bootstrap.css'

const store = makeStore({modalOpen: false})

function MyApp({ Component, pageProps, store}) {
  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  );
}

class MyApp2 extends App {

  store = makeStore({modalOpen: false})
  
  render() {
      const {Component, pageProps, store} = this.props;
      return (
          <Provider store={store}>
              <Component {...pageProps} />
          </Provider>
      );
  }
}

export default MyApp;