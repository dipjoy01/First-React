import styles from "@/App.module.css";
import { Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
export default function Women() {
  return (
    <>
      <HeroBanner />
      <section className={`${styles.categoryCircles} container`}>
        <h2 className={styles.sectionTitle}>TOP CATEGORIES FOR WOMEN</h2>
        <div className={styles.circleGrid}>
          <Link to="/product" className={styles.circleItem}>
            <img src="/images/img_4.jpg" alt="Dresses" />
            <span>Dresses</span>
          </Link>
          <Link to="/product" className={styles.circleItem}>
            <img src="/images/img_4.jpg" alt="Kurtas" />
            <span>Kurtas</span>
          </Link>
          <Link to="/product" className={styles.circleItem}>
            <img src="/images/img_22.jpg" alt="Tops" />
            <span>Tops</span>
          </Link>
          <Link to="/product" className={styles.circleItem}>
            <img src="/images/img_23.jpg" alt="Jeans" />
            <span>Jeans</span>
          </Link>
          <Link to="/product" className={styles.circleItem}>
            <img src="/images/img_24.jpg" alt="Handbags" />
            <span>Handbags</span>
          </Link>
          <Link to="/product" className={styles.circleItem}>
            <img src="/images/img_25.jpg" alt="Footwear" />
            <span>Footwear</span>
          </Link>
        </div>
      </section>
      <section className={`${styles.globalBrands} container`}>
        <h2 className={styles.sectionTitle}>TRENDING WOMEN'S BRANDS</h2>
        <div className={styles.brandGrid}>
          <Link to="/product" className={styles.brandCard}>
            <img src="/images/img_26.jpg" alt="Brand" />
            <div className={styles.brandInfo}>
              <h3>Zara</h3>
              <p>Up to 40% Off</p>
            </div>
          </Link>
          <Link to="/product" className={styles.brandCard}>
            <img src="/images/img_27.jpg" alt="Brand" />
            <div className={styles.brandInfo}>
              <h3>H&M</h3>
              <p>Min 30% Off</p>
            </div>
          </Link>
          <Link to="/product" className={styles.brandCard}>
            <img src="/images/img_28.jpg" alt="Brand" />
            <div className={styles.brandInfo}>
              <h3>W</h3>
              <p>Up to 50% Off</p>
            </div>
          </Link>
          <Link to="/product" className={styles.brandCard}>
            <img src="/images/img_29.jpg" alt="Brand" />
            <div className={styles.brandInfo}>
              <h3>Biba</h3>
              <p>Min 40% Off</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
