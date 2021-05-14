import React from "react";

function ProductsState({ children, dataList, status: { loading, error } }) {
  console.log("status ", loading, error);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data.</div>;
  if (dataList.length === 0) return <div>No data present.</div>;
  return children;
  /* return (
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
  ); */
}

export default React.memo(ProductsState);
