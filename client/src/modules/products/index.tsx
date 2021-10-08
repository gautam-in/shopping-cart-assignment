import React from "react";

const Products = (): React.ReactElement => {
  return (
    <div className="products-container" id="products">
      {/* <select onChange={(e) => filterProducts(e.target.value)} className="custom-menu">
          {getCategoriesData.categories &&
            getCategoriesData.categories.map((element, index) => {
              return (
                <option value={element.id} key={index}>
                  {element.name}
                </option>
              );
            })}
        </select> */}
      <div className="sidebar-menu">{/* <Sidebar menuOptions={getCategoriesData.categories} filterOptions={(id: string) => filterProducts(id)} /> */}</div>
      <div className="products-component">{/* <ProductsComponent productsList={filteredProducts.length > 0 ? filteredProducts : getProductsData.products} addToCart={addToCart} /> */}</div>
    </div>
  );
};

export default Products;
