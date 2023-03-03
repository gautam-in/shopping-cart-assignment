import { useEffect, useState } from 'react';
import { axios } from '../utils/axios';

export const useFetchAPI = (url) => {
  const [state, setState] = useState({
    data: [],
    isError: false,
    isLoading: false
  });

  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      setState((state) => ({ ...state, isLoading: true }));
      try {
        const { data } = await axios.get(url, { signal: controller.signal });
        setState({ data, isError: false, isLoading: false });
      } catch {
        setState((state) => ({ ...state, isError: true }));
      } finally { 
        setState((state) => ({ ...state, isLoading: false }));
      }
    };
    getData();
    return () => controller.abort();
  }, [url]);

  return { ...state };
};