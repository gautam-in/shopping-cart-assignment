import styles from '../styles/categoryBanner.module.scss';
import { useRouter } from 'next/router';
import { Link } from 'next/link'


const CategoryBanner = ({ name, description, enabled, imageUrl, id }) => {

  const router = useRouter();

  const onCategorySelectHandler = () => {
    router.push({
      pathname: "/products",
      query: { id }
    })
  }

  if (enabled) {
    return (
      <div className={styles.container} >
        <div className={styles.info}>
          <p className={styles.name}>
            {name}
          </p>
          <p className={styles.description}>
            {description}
          </p>
          <button onClick={onCategorySelectHandler}>Explore {name}</button>
        </div>
        <div className={styles.catImg}>
          <img className={styles.img} src={imageUrl} />
        </div>
      </div >
    )
  }

  return null;
}

export default CategoryBanner
