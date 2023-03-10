import { useState, useEffect } from "react";
import Constants from "../utils.js/Constants";

const useFetch = (url) => {
  
  const [data, setData] = useState([]);
  const [error,setError] = useState(false);

  useEffect(() => {
    fetch(`${Constants.baseUrl}${url}`)
      .then((res) => res.json())
      .then((data) => {
          setData(data)})
      .catch( e =>{
        console.log('inside error');
        setError(true);
      })
  }, [url]);

  return {data:data,error:error}
};

export default useFetch; 