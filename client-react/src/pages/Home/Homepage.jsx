import React from 'react';
import { BannerView } from '../../features/banner/BannerView'
import { CategoryView } from '../../features/categories/CategoryView';

export const Homepage = () => {
  return (
    <div>
        <BannerView/>
        <CategoryView/>
    </div>
  )
}
