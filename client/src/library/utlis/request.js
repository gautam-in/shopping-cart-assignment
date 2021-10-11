import service from "./service";

async function request(serviceName, data = {}) {
  const { method, url, body } = service(serviceName, data);
  const response = await fetch(url, {
    method,
    body: JSON.stringify(body),
  });
  return response.json();
}

export default request;
