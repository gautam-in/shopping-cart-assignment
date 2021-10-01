import Image from 'next/image';
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import styles from '../../styles/CategoryBanner.module.css';
import { addOrRemoveFilter } from '../../redux/features/productFilterSlice';

export default function CategoryBanner({
  id, name, description, imgURL, reverse,
}) {
  const dispatch = useDispatch();
  const router = useRouter();

  function handleCategoryClick() {
    dispatch(addOrRemoveFilter(id));
    router.push('/products');
  }
  return (
    <div className={`${styles.CategoryBannerContainer} ${reverse ? styles.reveseFlex : ''}`}>
      <div className={styles.CategoryBannerImg}>
        <Image src={imgURL} layout="fill" objectFit="contain" alt={name} />
      </div>
      <div className={styles.CategoryBannerDescription}>
        <div className={styles.CategoryTitle}>
          {name}
        </div>
        <div className={styles.CategoryDescription}>
          {description}
        </div>
        <div className={styles.CategoryButton}>
          <Button colorScheme="green" bgColor="var(--category-banner-card-button-color)" size="sm" onClick={handleCategoryClick}>
            Explore
            {' '}
            {name}
          </Button>
        </div>
      </div>
    </div>
  );
}
