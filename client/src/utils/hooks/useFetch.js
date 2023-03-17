import { useState, useEffect } from 'react';
// import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
      setLoading('loading...')
      setData(null);
      setError(null);
      fetch(url)
      .then((res) => {
          setLoading(false);
       return res.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch(err => {
          setLoading(false)
          setError('An error occurred. Awkward..')
      })
  }, [url])

  return { data, loading, error }
}

export default useFetch;