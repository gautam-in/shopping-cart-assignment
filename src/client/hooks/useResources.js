import { useEffect, useState } from 'react';
import axios from '../utils/axiosConfig';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);
  useEffect(() => {
    axios.get(`/${resource}`)
      .then((r) => {
        setResources(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [resource]);

  return resources;
};

export default useResources;
