import Head from "next/head";
import React from "react";

export default function CommonHead(props) {
  return (
    <Head>
      <title>
        {props.title}
      </title>
      <meta
        name="description"
        content={props.description}
      />
      <meta
        name="keywords"
        content={props.keywords}
      ></meta>
    </Head>
  );
}
