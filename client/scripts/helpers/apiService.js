export async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return Promise.resolve(data);
}
