import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import Head from "next/head";
import React from "react";

const AppLayout: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Head>
        <title>Sabka Bazaar</title>
        <meta name="description" content="Sabka Bazaar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader />
      <main style={{ marginTop: "110px" }}>{children}</main>
      <AppFooter />
    </>
  );
};

export default AppLayout;
