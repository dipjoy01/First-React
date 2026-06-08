import styles from "@/App.module.css";
import { Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
function Beauty() {
  return (
    <>
      <HeroBanner />

      <section className={`${styles.categoryCircles} container`}>
        <h2 className={styles.sectionTitle}>SHOP BY BEAUTY CATEGORY</h2>
        <div className={styles.circleGrid}>
          <Link to="/product" className={styles.circleItem}>
            <img src="/First-React/images/img_30.jpg" alt="Skincare" />
            <span>Skincare</span>
          </Link>
          <Link to="/product" className={styles.circleItem}>
            <img src="/First-React/images/img_50.jpg" alt="Makeup" />
            <span>Makeup</span>
          </Link>
          <Link to="/product" className={styles.circleItem}>
            <img src="/First-React/images/img_51.jpg" alt="Haircare" />
            <span>Haircare</span>
          </Link>
          <Link to="/product" className={styles.circleItem}>
            <img src="/First-React/images/img_52.jpg" alt="Perfumes" />
            <span>Perfumes</span>
          </Link>
          <Link to="/product" className={styles.circleItem}>
            <img src="/First-React/images/img_53.jpg" alt="Lip Care" />
            <span>Lip Care</span>
          </Link>
          <Link to="/product" className={styles.circleItem}>
            <img src="/First-React/images/img_54.jpg" alt="Eye Care" />
            <span>Eye Care</span>
          </Link>
        </div>
      </section>
      <section className={`${styles.globalBrands} container`}>
        <h2 className={styles.sectionTitle}>TOP BEAUTY BRANDS</h2>
        <div className={styles.brandGrid}>
          <Link to="/product" className={styles.brandCard}>
            <img src="/First-React/images/img_10.jpg" alt="Lakme" />
            <div className={styles.brandInfo}>
              <h3>Lakme</h3>
              <p>Up to 40% Off</p>
            </div>
          </Link>
          <Link to="/product" className={styles.brandCard}>
            <img src="/First-React/images/img_55.jpg" alt="Maybelline" />
            <div className={styles.brandInfo}>
              <h3>Maybelline</h3>
              <p>Min 30% Off</p>
            </div>
          </Link>
          <Link to="/product" className={styles.brandCard}>
            <img src="/First-React/images/img_31.jpg" alt="L'Oreal" />
            <div className={styles.brandInfo}>
              <h3>L'Oreal Paris</h3>
              <p>Up to 50% Off</p>
            </div>
          </Link>
          <Link to="/product" className={styles.brandCard}>
            <img src="/First-React/images/img_57.jpg" alt="Biotique" />
            <div className={styles.brandInfo}>
              <h3>Biotique</h3>
              <p>Min 20% Off</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Beauty;
