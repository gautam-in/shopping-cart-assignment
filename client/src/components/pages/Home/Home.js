import React from 'react';
import Banner from "../../Banner/Banner"
import Categories from '../../Categories/Categories';
import styles from "./Home.module.css"

export default function Home() {
  return (
      <div className={styles.home}>
        <Banner/>
        <Categories/>
      </div>
  );
}
