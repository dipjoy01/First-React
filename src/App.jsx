import HeroBanner from "@/components/HeroBanner/HeroBanner";
import CategoryGrid from "@/components/CategoryGrid/CategoryGrid";
import Styles from "./App.module.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <HeroBanner />
      <CategoryGrid />

      {/* 
        Future Suggestion: Add a BrandsGrid component here 
        for the "Grand Global Brands" section.
      */}

      <section className={`${Styles.globalBrands} container`}>
        <h2 className={Styles.sectionTitle}>GRAND GLOBAL BRANDS</h2>
        <div className={Styles.brandGrid}>
          <Link to="/product" className={Styles.brandCard}>
            <img src="/First-React/images/img_10.jpg" alt="Brand 1" />
            <div className={Styles.brandInfo}>
              <h3>U.S. Polo Assn.</h3>
              <p>Up to 50% Off</p>
            </div>
          </Link>
          <Link to="/product" className={Styles.brandCard}>
            <img src="/First-React/images/img_11.jpg" alt="Brand 2" />
            <div className={Styles.brandInfo}>
              <h3>H&M</h3>
              <p>Min 40% Off</p>
            </div>
          </Link>
          <Link to="/product" className={Styles.brandCard}>
            <img src="/First-React/images/img_10.jpg" alt="Brand 3" />
            <div className={Styles.brandInfo}>
              <h3>Puma</h3>
              <p>Up to 60% Off</p>
            </div>
          </Link>
          <Link to="/product" className={Styles.brandCard}>
            <img src="/First-React/images/img_11.jpg" alt="Brand 4" />
            <div className={Styles.brandInfo}>
              <h3>Levi's</h3>
              <p>Min 30% Off</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default App;
