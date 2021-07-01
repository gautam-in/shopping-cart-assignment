const BASE_URL = 'http://localhost:5000';

const GET = async (resource) => {
  try {
    const res = await fetch(`${BASE_URL}/${resource}`, {
      method: 'get',
    });
    if (!res.ok) {
      throw new Error('Something went wrong');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    if (error.data) {
      return error.data;
    }
    return error;
  }
};

const POST = async (resource, body) => {
    try {
       const res = await fetch(`${BASE_URL}/${resource}`, {
            method: 'post',
            body: body,
          })
          if (!res.ok) {
            throw new Error('Something went wrong');
          }
          const data = await res.json();
          return data;

    } catch (error) {
        if (error.data) {
            return error.data;
          }
          return error;
    }

};

export const apiProvider = {
  GET,
  POST,
};
