export async function getProducts() {
  let response = await fetch("http://localhost:5000/products");
  let results = await response.json();
  return results;
}

export async function getCategoryProducts(category) {
  let response = await fetch("http://localhost:5000/products");
  let results = await response.json();
  return results.filter((e) => e.category === category);
}
