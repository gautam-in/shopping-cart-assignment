import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../styles/products.module.scss'
import Product from './Product';

const Products = ({ categories, products }) => {

  const [catId, setCatId] = useState("");
  const router = useRouter();

  const catSelectHandler = (id) => {

    if (catId == id || router.query?.id == id || id =="") {

      router.replace({
        pathname: "/products"
      });
      setCatId("");
    } else {
      router.replace({
        pathname: "/products",
        query: { id }
      });
      setCatId(id);
    }
  }

  let cId = catId;
  if (router.query?.id) {
    cId = router.query.id;
  }

  const isSelected = (id) => {
    console.log(cID);
    if (id == cId) return true;
    return false;
  }

  const mobileViewCategories = (
    <>
      <select className={`${styles.category} ${styles.mobileCat}`} onChange={(e) => catSelectHandler(e.target.value)} value={cId}>
        <option key={0} value={""} >All</option>
        {
          categories.map((cat, i) => (
            cat.enabled && <option key={i} value={cat.id} >{cat.name}</option>
          ))
        }
      </select>
      <p className={styles.downArrow}><i></i></p>
    </>
  )

  return (
    <section className={styles.container}>
      <div className={styles.filter} >
        {
          categories.map((cat, i) => (
            cat.enabled ? (
              <div key={i} className={`${styles.category} ${styles.catDesktop} ${cId == cat.id ? styles.active : ""}`} onClick={() => catSelectHandler(cat.id)}>
                <p>{cat.name}</p>
              </div>
            ) : null
          ))
        }
        {mobileViewCategories}
      </div>
      <div className={styles.items}>
        {products.length === 0 ? <p>Loading....</p> : (
          products.filter(p => (
            cId == "" ? true : p.category == cId
          )).map(p => <Product key={p.id} {...p} />)

        )}
      </div>
    </section>
  )
}

export default Products
