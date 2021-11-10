import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const[loading,setLoading] = useState(false);
  const[error,setError] = useState(null);

  useEffect(() => {
    setLoading('loading');
    setData(null);
    setError(null);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  },[url]);
  return [data, loading, error];
}