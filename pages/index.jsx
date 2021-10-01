import CategoryBannerList from '../components/CategoryBanner/CategoryBannerList';
import Banners from '../components/Slider';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.HomePageBanner}>
        <Banners />
      </div>
      <div className={styles.ProductCategories}>
        <CategoryBannerList />
      </div>
    </div>
  );
}
