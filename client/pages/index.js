import HomePage from '../containers/Home';

export async function getStaticProps() {
  const banners = await fetch('http://localhost:4000/banners').then((res) =>
    res.json()
  );
  const categories = await fetch('http://localhost:4000/categories').then(
    (res) => res.json()
  );

  return {
    props: {
      banners: banners
        .filter((banner) => banner.isActive)
        .sort((a, b) => a.order - b.order),
      categories: categories
        .filter((category) => category.enabled)
        .sort((a, b) => a.order - b.order),
    },
  };
}

export default HomePage;
