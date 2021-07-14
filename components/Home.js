import { memo, useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import RequestsHandler from '../lib/requestHandler';
import { ButtonStyle } from './styles/GlobalStyles';
import { BACKEND_URL } from '../config';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { CategoryStyle } from './styles/HomeStyle';

function Home() {
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);
  const bannersData = banners?.join('');
  const categoriesData = categories?.join('');
  useEffect(() => {
    // getting banners
    RequestsHandler.getData(`${BACKEND_URL}banners/`, setBanners);
    // getting categories
    RequestsHandler.getData(`${BACKEND_URL}categories/`, setCategories);
  }, [bannersData, categoriesData]);
  return (
    <>
      <Carousel showStatus={false} showThumbs={false} emulateTouch>
        {banners
          ?.filter((banner) => banner.isActive)
          .map((banner) => (
            <div key={banner.id}>
              <img src={banner.bannerImageUrl} alt={banner.ImageAlt} />
            </div>
          ))}
      </Carousel>
      <Categories categories={categories} />
    </>
  );
}
function Categories({ categories }) {
  const sortedCategories = categories?.sort((a, b) => a.order - b.order);
  console.log(sortedCategories);
  return (
    <>
      {sortedCategories
        .filter((category) => category.enabled)
        .map((category, index) =>
          index % 2 === 0 ? (
            <CategoryStyle key={category.key}>
              <div>
                <article>
                  <h2>{category.name}</h2>
                  <p>{category.description}</p>
                  <ButtonStyle>{`Explore ${category.key}`}</ButtonStyle>
                </article>
              </div>
              <div>
                <img src={category.imageUrl} alt={category.name} />{' '}
              </div>
            </CategoryStyle>
          ) : (
            <CategoryStyle>
              <div>
                <img src={category.imageUrl} alt={category.name} />{' '}
              </div>
              <div>
                <article>
                  <h2>{category.name}</h2>
                  <p>{category.description}</p>
                  <ButtonStyle>{`Explore ${category.key}`}</ButtonStyle>
                </article>
              </div>
            </CategoryStyle>
          )
        )}
    </>
  );
}
export default memo(Home);
