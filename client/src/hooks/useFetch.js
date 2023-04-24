import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
      setLoading(true)
      setData(null);
      setError(null);
      fetch(url)
      .then((res) => {
       return res.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch(err => {
          setError('Something went wrong!');
          console.error("error",err);
      }).finally(() => {
        setLoading(false);
      })
  }, [url])

  return { data, loading, error }
}

export default useFetch;