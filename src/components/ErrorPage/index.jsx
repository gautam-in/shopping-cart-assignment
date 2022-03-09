import React from "react";

const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "50%",
      }}
    >
      <h1>Error: Failed to fetch data</h1>
      <h2>
        Please make sure if the server is running and try refreshing the page
      </h2>
      <p>Start the server with "yarn server" command</p>
    </div>
  );
};

export default ErrorPage;
