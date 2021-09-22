export async function getCategories() {
  let response = await fetch("http://localhost:5000/categories");
  let results = await response.json();
  return results.filter((e) => e.enabled).sort((a, b) => a.order - b.order);
}
