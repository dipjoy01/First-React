import styles from "@/App.module.css"
import { Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
export default function HomeLive() {
  return (
    <>
      <HeroBanner />
      <section className={`${styles.categoryCircles} container`}>
        <h2 className={styles.sectionTitle}>SHOP BY CATEGORY</h2>
        <div className={styles.circleGrid}>
          <Link to ="/product" className={styles.circleItem}>
            <img src="/images/img_38.jpg" alt="Bedding" />
            <span>Bedding</span>
          </Link>
          <Link to ="/product" className={styles.circleItem}>
            <img src="/images/img_39.jpg" alt="Kitchen" />
            <span>Kitchen</span>
          </Link>
          <Link to ="/product" className={styles.circleItem}>
            <img src="/images/img_40.jpg" alt="Decor" />
            <span>Home Decor</span>
          </Link>
          <Link to ="/product" className={styles.circleItem}>
            <img src="/images/img_41.jpg" alt="Bath" />
            <span>Bath & Towels</span>
          </Link>
          <Link to ="/product" className={styles.circleItem}>
            <img src="/images/img_42.jpg" alt="Cushions" />
            <span>Cushions</span>
          </Link>
          <Link to ="/product" className={styles.circleItem}>
            <img src="/images/img_43.jpg" alt="Lighting" />
            <span>Lighting</span>
          </Link>
        </div>
      </section>
      <section className={`${styles.globalBrands} container`}>
        <h2 className={styles.sectionTitle}>POPULAR HOME BRANDS</h2>
        <div className={styles.brandGrid}>
          <Link to ="/product" className={styles.brandCard}>
            <img src="/images/img_44.jpg" alt="Brand" />
            <div className={styles.brandInfo}>
              <h3>Spaces</h3>
              <p>Up to 50% Off</p>
            </div>
          </Link>
          <Link to ="/product" className={styles.brandCard}>
            <img src="/images/img_45.jpg" alt="Brand" />
            <div className={styles.brandInfo}>
              <h3>Story@Home</h3>
              <p>Min 40% Off</p>
            </div>
          </Link>
          <Link to ="/product" className={styles.brandCard}>
            <img src="/images/img_46.jpg" alt="Brand" />
            <div className={styles.brandInfo}>
              <h3>Trident</h3>
              <p>Up to 55% Off</p>
            </div>
          </Link>
          <Link to ="/product" className={styles.brandCard}>
            <img src="/images/img_47.jpg" alt="Brand" />
            <div className={styles.brandInfo}>
              <h3>Raymond Home</h3>
              <p>Min 30% Off</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
