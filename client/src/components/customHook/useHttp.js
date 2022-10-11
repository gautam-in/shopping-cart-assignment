import { useCallback, useState } from "react";
import axios from "axios";
const useHttp = () => {
  const [isLodaing, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendHttpRequest = useCallback(async (config) => {
    setIsLoading(true);
    try {
      const response = await axios(config.url, {
        method: config.method ? config.method : "GET",
        header: config.header ? config.header : {},
        body: config.body ? JSON.stringify(config.body) : null,
      });
      const data = await response;
      return data;
    } catch (err) {
      setError(err.message || "something went wrong");
    }
    setIsLoading(false);
  }, []);

  return { isLodaing, error, sendHttpRequest };
};

export default useHttp;
