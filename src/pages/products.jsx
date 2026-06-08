import styles from "./plp.module.css";
import { Link } from "react-router-dom";

function Product() {
  return (
    <>
      <div className={styles.plpMain}>
        <div className={styles.breadcrumbs}>
          <a href="index.html">Home</a>/ <a href="men.html">Clothing</a>/
          <span>Men T-Shirts</span>
        </div>

        <div className={styles.plpHeader}>
          <div className={styles.titleCount}>
            <h1>Men T-Shirts</h1>
            <span className={styles.itemCount}>- 10423 items</span>
          </div>
          <div className={styles.sortBy}>
            <span>
              Sort by : <strong>Recommended</strong>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            </svg>
          </div>
        </div>

        <div className={styles.plpContent}>
          {/* <!-- Sidebar Filters --> */}
          <aside className={styles.filtersSidebar}>
            <div className={styles.filterHeader}>
              <h3>FILTERS</h3>
              <button className={styles.clearAll}>CLEAR ALL</button>
            </div>

            <div className={styles.filterSection}>
              <h4>CATEGORIES</h4>
              <ul>
                <li>
                  <label>
                    <input type="checkbox" checked />
                    Tshirts
                    <span className={styles.count}>(10423)</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" /> Lounge Tshirts
                    <span className={styles.count}>(124)</span>
                  </label>
                </li>
              </ul>
            </div>

            <div className={styles.filterSection}>
              <h4>BRAND</h4>
              <ul>
                <li>
                  <label>
                    <input type="checkbox" /> Roadster
                    <span className={styles.count}>(1120)</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" /> HRX by Hrithik Roshan
                    <span className={styles.count}>(845)</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" /> Puma
                    <span className={styles.count}>(650)</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" /> WROGN
                    <span className={styles.count}>(432)</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" /> U.S. Polo Assn.
                    <span className={styles.count}>(320)</span>
                  </label>
                </li>
              </ul>
            </div>

            <div className={styles.filterSection}>
              <h4>PRICE</h4>
              <ul>
                <li>
                  <label>
                    <input type="checkbox" /> Rs. 199 to Rs. 1000
                    <span className={styles.count}>(6420)</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" /> Rs. 1000 to Rs. 2000
                    <span className={styles.count}>(3210)</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" /> Rs. 2000 to Rs. 3000
                    <span className={styles.count}>(500)</span>
                  </label>
                </li>
              </ul>
            </div>

            <div className={styles.filterSection}>
              <h4>COLOR</h4>
              <ul className={styles.colorFilter}>
                <li>
                  <label>
                    <input type="checkbox" />
                    <span
                      className={styles.colorCircle}
                      style={{ backgroundColor: " #000" }}></span>
                    Black
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" />
                    <span
                      className={styles.colorCircle}
                      style={{
                        backgroundColor: "#fff",
                        border: "1px solid #ccc",
                      }}></span>
                    White
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" />
                    <span
                      className={styles.colorCircle}
                      style={{ backgroundColor: "#000080" }}></span>
                    Navy Blue
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" />
                    <span
                      className={styles.colorCircle}
                      style={{ backgroundColor: " #808080" }}></span>
                    Grey
                  </label>
                </li>
              </ul>
            </div>
          </aside>

          {/* <!-- Product Grid --> */}
          <section className={styles.productGrid}>
            {/* <!-- Product Card 1 --> */}
            <div className={styles.productCard}>
              <Link to = '/productdetail'>
                <div className={styles.productImageContainer}>
                  <img
                    src="/First-React/images/img_64.jpg"
                    alt="Black T-shirt"
                  />
                  <div className={styles.productRating}>4.2 ⭐ | 3.4k</div>
                </div>
                <div className={styles.productDetails}>
                  <h3 className={styles.productBrand}>Roadster</h3>
                  <h4 className={styles.productName}>
                    Men Solid Round Neck T-shirt
                  </h4>
                  <div className={styles.productPrice}>
                    <span className={styles.discountedPrice}>Rs. 299</span>
                    <span className={styles.originalPrice}>Rs. 599</span>
                    <span className={styles.discountPercent}>(50% OFF)</span>
                  </div>
                </div>
              </Link>
              <div className={styles.productActions}>
                <button className={styles.btnWishlist}>🤍 WISHLIST</button>
              </div>
            </div>

            {/* <!-- Product Card 2 --> */}
            <div className={styles.productCard}>
              <Link to = '/productdetail'>
                <div className={styles.productImageContainer}>
                  <img
                    src="/First-React/images/img_65.jpg"
                    alt="White T-shirt"
                  />
                  <div className={styles.productRating}>4.5 ⭐ | 1.2k</div>
                </div>
                <div className={styles.productDetails}>
                  <h3 className={styles.productBrand}>HRX by Hrithik Roshan</h3>
                  <h4 className={styles.productName}>
                    Men Printed Cotton T-shirt
                  </h4>
                  <div className={styles.productPrice}>
                    <span className={styles.discountedPrice}>Rs. 449</span>
                    <span className={styles.originalPrice}>Rs. 899</span>
                    <span className={styles.discountPercent}>(50% OFF)</span>
                  </div>
                </div>
              </Link>
              <div className={styles.productActions}>
                <button className={styles.btnWishlist}>🤍 WISHLIST</button>
              </div>
            </div>

            {/* <!-- Product Card 3 --> */}
            <div className={styles.productCard}>
              <Link to = '/productdetail'>
                <div className={styles.productImageContainer}>
                  <img src="/First-React/images/img_66.jpg" alt="Grey T-shirt" />
                  <div className={styles.productRating}>4.1 ⭐ | 890</div>
                </div>
                <div className={styles.productDetails}>
                  <h3 className={styles.productBrand}>Puma</h3>
                  <h4 className={styles.productName}>
                    Men Graphic Print T-shirt
                  </h4>
                  <div className={styles.productPrice}>
                    <span className={styles.discountedPrice}>Rs. 899</span>
                    <span className={styles.originalPrice}>Rs. 1499</span>
                    <span className={styles.discountPercent}>(40% OFF)</span>
                  </div>
                </div>
              </Link>
              <div className={styles.productActions}>
                <button className={styles.btnWishlist}>🤍 WISHLIST</button>
              </div>
            </div>

            {/* <!-- Product Card 4 --> */}
            <div className={styles.productCard}>
              <Link to = '/productdetail'>
                <div className={styles.productImageContainer}>
                  <img src="/First-React/images/img_67.jpg" alt="Blue T-shirt" />
                </div>
                <div className={styles.productDetails}>
                  <h3 className={styles.productBrand}>WROGN</h3>
                  <h4 className={styles.productName}>Men Slim Fit T-shirt</h4>
                  <div className={styles.productPrice}>
                    <span className={styles.discountedPrice}>Rs. 699</span>
                    <span className={styles.originalPrice}>Rs. 1199</span>
                    <span className={styles.discountPercent}>(41% OFF)</span>
                  </div>
                </div>
              </Link>
              <div className={styles.productActions}>
                <button className={styles.btnWishlist}>🤍 WISHLIST</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Product;
