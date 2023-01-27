import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { axios } from "./axios";

interface IRequestState {
  data: any;
  isError: boolean;
  isLoading: boolean;
}

export const useQuery = (url: string) => {
  const [state, setState] = useState<IRequestState>({
    data: [],
    isError: false,
    isLoading: false,
  });

  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      setState((state) => ({ ...state, isLoading: true }));
      try {
        const { data } = await axios.get<AxiosResponse>(url, {
          signal: controller.signal,
        });
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

  const { data, isError, isLoading } = state;
  return { data, isError, isLoading };
};
