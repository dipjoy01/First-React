import styles from "./CategoryGrid.module.css";
import { Link } from "react-router-dom";

const CATEGORIES = [
  { id: 1, name: "T-Shirts", image: "/First-React/images/img_2.jpg", link: "products.html" }, // Note: img_2.jpg used as a placeholder if empty
  { id: 2, name: "Jackets", image: "/First-React/images/img_3.jpg", link: "products.html" },
  { id: 3, name: "Dresses", image: "/First-React/images/img_4.jpg", link: "products.html" },
  { id: 4, name: "Shoes", image: "/First-React/images/img_5.jpg", link: "products.html" },
  { id: 5, name: "Watches", image: "/First-React/images/img_6.jpg", link: "products.html" },
  { id: 6, name: "Bags", image: "/First-React/images/img_7.jpg", link: "products.html" },
];

const CategoryGrid = () => {
  return (
    <section className={`${styles.categoryCircles} container`}>
      <h2 className={styles.sectionTitle}>MEDAL WORTHY BRANDS TO BAG</h2>
      <div className={styles.circleGrid}>
        {CATEGORIES.map((category) => (
          <Link key={category.id} to="/product?" className={styles.circleItem}>
            <img src={category.image} alt={category.name} />
            <span>{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
