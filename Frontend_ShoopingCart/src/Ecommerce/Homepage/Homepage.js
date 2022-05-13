import React, { useState } from 'react';
import axios from 'axios';
import * as api from '../api';
import './homepage.css';
import Carousela from './Carousela';
import Categories from './Categories';
import Footer from '../Footer/Footer';

export default function Homepage() {
  const [post, setPost] = useState([]);
  const [categories, setCategories] = useState([]);

  const getBanners = () => {
    axios
      .get(api.get_Banners)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err, 'err from get banner');
      });
  };

  const getCategories = () => {
    axios
      .get(api.get_categories)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err, 'err from get Categories');
      });
  };

  function sortbyorder(a, b) {
    return a.order - b.order;
  }
  categories.sort(sortbyorder);

  React.useEffect(() => {
    getBanners();
    getCategories();
  }, []);

  return (
    <>
      <div>
        <Carousela post={post} />
        <Categories categories={categories} />
        <Footer />
      </div>
    </>
  );
}
