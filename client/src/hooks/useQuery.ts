/* eslint-disable import/no-extraneous-dependencies */
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { axios } from '../utils/axios';

interface IRequestState {
  data: any;
  isError: boolean;
  isLoading: boolean;
}

const useQuery = (url: string) => {
  const [state, setState] = useState<IRequestState>({
    data: [],
    isError: false,
    isLoading: false,
  });

  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      setState((value) => ({ ...value, isLoading: true }));
      try {
        const { data } = await axios.get<AxiosResponse>(url, {
          signal: controller.signal,
        });
        setState({ data, isError: false, isLoading: false });
      } catch {
        setState((value) => ({ ...value, isError: true }));
      } finally {
        setState((value) => ({ ...value, isLoading: false }));
      }
    };

    getData();
    return () => controller.abort();
  }, [url]);

  const { data, isError, isLoading } = state;
  return { data, isError, isLoading };
};

export default useQuery;
