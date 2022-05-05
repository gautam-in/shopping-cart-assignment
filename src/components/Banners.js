import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from './Banner';

function Banners() {
  const { REACT_APP_CATEGORIES_URL = 'http://localhost:5000/categories' } = process.env;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(REACT_APP_CATEGORIES_URL).then(response => {
      let { data } = response;
      data = data.sort(function(a, b) {
        return a.order - b.order;
      });
      data = data.filter(element => element.enabled);
      setData(data);
    }).catch(error => console.error(error));
  }, []);

  if(data.length === 0) return null;

  return (
    <>
      {data.map((item, index) => {
        return <Banner data={item} index={index} key={item.id} />;
      })}
    </>
  );
}

export default Banners;
