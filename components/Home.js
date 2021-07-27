import Head from 'next/head';
import { memo, useEffect, useState, Suspense } from 'react';
import { Carousel } from 'react-responsive-carousel';
import RequestsHandler from '../lib/requestHandler';
import { ButtonStyle } from './styles/GlobalStyles';
import { BACKEND_URL } from '../config';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { CategoryStyle } from './styles/HomeStyle';
import { useAppData } from '../lib/store';

function Home() {
  const contextData = useAppData();
  const { categories } = contextData?.data;
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    // getting banners
    RequestsHandler.getData(`${BACKEND_URL}banners/`).then((res) => {
      setBanners(res);
    });
    // getting categories
    if (categories.length === 0) {
      RequestsHandler.getData(`${BACKEND_URL}categories/`).then((res) => {
        contextData.setData({ ...contextData.data, categories: res });
      });
    }
  }, []);
  return (
    <>
      <Head>
        <title>Sabka Bazaar - Online Grocery Store</title>
      </Head>
      <Carousel
        preventMovementUntilSwipeScrollTolerance
        swipeable
        showStatus={false}
        showThumbs={false}
        emulateTouch
      >
        {banners
          ?.filter((banner) => banner.isActive)
          .map((banner) => (
            <div key={banner.id}>
              <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
            </div>
          ))}
      </Carousel>
      <Categories categories={categories} />
    </>
  );
}
export function Categories({ categories }) {
  const sortedCategories = categories?.sort((a, b) => a.order - b.order);

  return (
    <>
      {sortedCategories
        .filter((category) => category.enabled)
        .map((category, index) =>
          // left and right arrangment on the basis of their indices
          index % 2 === 0 ? (
            <CategoryStyle key={category.id} tabIndex="0">
              <div>
                <article>
                  <h2>{category.name}</h2>
                  <p>{category.description}</p>
                  <ButtonStyle>{`Explore ${category.key}`}</ButtonStyle>
                </article>
              </div>
              <div>
                <Suspense fallback={<p>loading...</p>}>
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    width="auto"
                    height="auto"
                  />{' '}
                </Suspense>
              </div>
            </CategoryStyle>
          ) : (
            <CategoryStyle key={category.id} tabIndex="0">
              <div>
                <Suspense fallback={<p>loading...</p>}>
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    width="auto"
                    height="auto"
                  />{' '}
                </Suspense>{' '}
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
