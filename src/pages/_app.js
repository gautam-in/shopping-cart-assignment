// import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import {Provider} from "react-redux";
import store from "./../store/index";
import React from "react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {

  console.log("App Component Loaded ...")
  return (
    <Provider store={store}>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </Provider>
  )
}