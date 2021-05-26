import React from "react";

function ProductsState({ children, dataList, status: { loading, error } }) {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data.</div>;
  if (dataList.length === 0) return <div>No data present.</div>;
  return children;
}

export default React.memo(ProductsState);
