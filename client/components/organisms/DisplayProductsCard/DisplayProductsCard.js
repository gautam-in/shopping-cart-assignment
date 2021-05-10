import React from "react";

function DisplayProductsCard({
  children,
  dataList,
  status: { loading, error },
}) {
  console.log("status ", loading, error);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error fetching data.</div>
      ) : dataList.length === 0 ? (
        <div>No data present.</div>
      ) : (
        children
      )}
    </>
  );
}

export default React.memo(DisplayProductsCard);
