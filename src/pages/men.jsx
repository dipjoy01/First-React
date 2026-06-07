import styles from "@/App.module.css";
import { Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
export default function Men() {
  return (
    <><HeroBanner />
      <section className={`${styles.categoryCircles} container`}>
        <h2 className={styles.sectionTitle}>TOP CATEGORIES FOR MEN</h2>
        <div className={styles.circleGrid}>
          <Link to = "/product" className={styles.circleItem}>
            <img src="/images/img_2.jpg" alt="T-Shirts" />
            <span>T-Shirts</span>
          </Link>
          <Link to = "/product" className={styles.circleItem}>
            <img src="/images/img_3.jpg" alt="Jackets" />
            <span>Jackets</span>
          </Link>
          <Link to = "/product" className={styles.circleItem}>
            <img src="/images/img_17.jpg" alt="Jeans" />
            <span>Jeans</span>
          </Link>
          <Link to = "/product" className={styles.circleItem}>
            <img src="/images/img_18.jpg" alt="Shoes" />
            <span>Shoes</span>
          </Link>
          <Link to = "/product" className={styles.circleItem}>
            <img src="/images/img_6.jpg" alt="Watches" />
            <span>Watches</span>
          </Link>
          <Link to = "/product" className={styles.circleItem}>
            <img src="/images/img_19.jpg" alt="Activewear" />
            <span>Activewear</span>
          </Link>
        </div>
      </section>
    </>
  );
}
