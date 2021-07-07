import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const useApiRequest = url => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = () => {
        axios
          .get(url)
          .then(response => {
            setIsLoading(false);
            setData(response.data);
          })
          .catch(error => {
            setError(error);
          });
      };
      fetchData();
    }, [url]);
  
    return { error, isLoading, data };
  };