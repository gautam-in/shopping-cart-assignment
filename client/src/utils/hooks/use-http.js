import { useState, useEffect } from "react";

const useHttp = (url, initialState = []) => {
  const [data, setData] = useState(initialState);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const responseData = await response.json();
      setData(responseData);
      console.log(responseData);
    };
    fetchData();
  }, [url]);
  return data;
};

export default useHttp;
