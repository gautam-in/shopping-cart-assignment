const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error(`${response.status} Error`);
};

export default handleResponse;
