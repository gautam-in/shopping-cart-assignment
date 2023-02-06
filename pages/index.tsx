import styles from "../styles/home.module.scss";
import { useEffect } from "react";

function HomePage() {
  const fetchData = async () => {
    const res = await fetch("../server/banners/index.get.json");
    return await res.json();
  };

  useEffect(() => {
    fetchData().then((res) => console.log(res));
  }, []);
  return <div className={styles.app}>Welcome to Next.js!</div>;
}

export default HomePage;
