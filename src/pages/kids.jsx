import styles from "@/App.module.css";
import { Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
export default function Ki() {
  return (
    <>
      <HeroBanner />
      <section className={`${styles.categoryCircles} container`}>
        <h2 className={styles.sectionTitle}>TOP CATEGORIES FOR KIDS</h2>
        <div className={styles.circleGrid}>
          <Link to="/product" className={styles.circleItem}>
            <img src="/First-React/images/img_31.jpg" alt="Boys Clothing" />
            <span>Boys Clothing</span>
          </Link>
          <Link to="/product" className={styles.circleItem}>
            <img src="/First-React/images/img_32.jpg" alt="Girls Clothing" />
            <span>Girls Clothing</span>
          </Link>
          <Link to="/product" className={styles.circleItem}>
            <img src="/First-React/images/img_33.jpg" alt="Kids Shoes" />
            <span>Shoes</span>
          </Link>
          <Link to="/product" className={styles.circleItem}>
            <img src="/First-React/images/img_5.jpg" alt="School Bags" />
            <span>School Bags</span>
          </Link>
          <Link to="/product" className={styles.circleItem}>
            <img src="/First-React/images/img_35.jpg" alt="Sportswear" />
            <span>Sportswear</span>
          </Link>
          <Link to="/product" className={styles.circleItem}>
            <img src="/First-React/images/img_36.jpg" alt="Newborn" />
            <span>Newborn</span>
          </Link>
        </div>
      </section>
    </>
  );
}
