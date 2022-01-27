import { useCallback, useEffect, useState } from "react";

export const useFetch = (url, { manual = false, method = "GET" } = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [error, setServerError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      let resp = await fetch(url, {
        method,
      });
      const data = await resp.json();

      setApiData(data);
      setIsLoading(false);
      return data;
    } catch (error) {
      setServerError(error);
      setIsLoading(false);
      return error;
    }
  }, [url, method]);

  useEffect(() => {
    if (!manual) fetchData();
  }, [fetchData, manual]);

  const execute = async () => {
    return fetchData();
  };

  return [{ isLoading, apiData, error }, execute];
};
