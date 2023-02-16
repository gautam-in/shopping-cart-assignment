import Image from "next/image";
import styles from "./Cart.module.scss";

export default function CartBanner() {
  return (
    <div className={styles.cartBannerContainer}>
      <Image
        src="/static/images/lowest-price.png"
        alt="lowest-price-guaranteed"
        height={35}
        width={100}
      />
      <div className={styles.bannerText}>
        You won&apos;t find it cheaper anywhere.
      </div>
    </div>
  );
}
