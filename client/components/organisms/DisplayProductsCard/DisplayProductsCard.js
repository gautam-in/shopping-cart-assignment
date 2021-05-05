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
      {/* {loading && <div>Loading...</div>}
      {!loading && error && <div>Error fetching data.</div>}
      {!loading && !error && dataList.length === 0 && (
        <div>No data present.</div>
      )}
      {!loading && !error && children} */}
    </>
  );
}

export default DisplayProductsCard;
