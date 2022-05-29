import React from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { Layout } from "./components/Layout/Layout";

export const App = () => {
    // return (
    //     <div>
    //       <Header />
    //       <Main />
    //       <Footer />
    //     </div>
    // )
    return (
      <Layout>
        <Main />
      </Layout>
    )
}