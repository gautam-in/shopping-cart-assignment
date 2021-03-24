import React from 'react';
import { map } from 'lodash';

import './Home.scss';

import { sortCallback } from '../../utils/common';
import useResources from '../../hooks/useResources';

import Banner from '../Shared/Banner';
import ContentSection from '../Shared/ContentSection';

const Home = () => {
  const banners = useResources('banners');
  const categories = useResources('categories').sort(sortCallback('order'));

  return (
    <div className="home-content">
      <Banner banners={banners} />
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

    </div>
  );
};

export default Home;
