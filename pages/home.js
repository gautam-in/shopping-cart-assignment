import Banner from '../app/containers/Banners';
import Categories from '../app/containers/Categories';
import useTitle from '../utils/useTitle';
// import { fetchBanners, fetchCategories } from '../actions';
// import { wrapper } from '../reducers';


const Home = () => {
  return (
    <main>
      {useTitle('Home')}
      <Banner  /> 
      <Categories  />
    </main>
  );
};
// export const getServerSideProps = wrapper.getServerSideProps(
//   async (context) => {
//     console.log(`context ${context}`)
//    const dispatch = useDispatch();
//    const banners = dispatch(fetchBanners());
//    console.log(banners)
//     // return {
//     //   props: {
//     //     banners,
//     //     categories,
//     //   },
//     // };
//   }
// );

export default Home;
