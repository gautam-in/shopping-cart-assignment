import React from 'react';
import { map } from 'lodash';

import axios from '../../utils/axiosConfig';
import { sortCallback } from '../../utils/common';

import ContentSection from '../Shared/ContentSection';

const Home = () => {
  const [banners, setBanners] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  const fetchBanners = React.useCallback(() => {
    axios.get('/banners')
      .then((r) => {
        setBanners(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const fetchCategories = React.useCallback(() => {
    axios.get('/categories')
      .then((r) => {
        setCategories(r.data.sort(sortCallback('order')));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  React.useEffect(() => {
    fetchBanners();
    fetchCategories();
  }, [fetchBanners, fetchCategories]);

  return (
    <>
      {
        map(categories, (category, cidx) => (
          category.order > -1
          && (
            <ContentSection
              key={cidx}
              category={category}
            />
          )
        ))
      }

    </>
  );
};

export default Home;
