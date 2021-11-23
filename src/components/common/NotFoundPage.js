import React from "react";

export default function NotFoundPage(props) {
  return (
    <div className="app-notFoundPage">
      <h2>{props.message || "Oops ! You have landed somewhere else."}</h2>
    </div>
  );
}
