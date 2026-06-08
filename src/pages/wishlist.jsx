import plp from "@/pages/plp.module.css";
import profile from "@/pages/profile.module.css";
import { Link } from "react-router-dom";

let styles = {
  ...plp,
  ...profile,
};
// console.log(styles);
export default function WhishList() {
  return (
    <>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <h2
          className={styles.contentHeader}
          style={{
            fontSize: "22px",
            fontWeight: "700",
            color: "#282c3f",
            marginBottom: "8px",
            border: "none",
            padding: "0",
          }}>
          My Wishlist{" "}
          <span
            style={{ fontWeight: "400", color: "#7e818c", fontSize: "16px" }}>
            3 items
          </span>
        </h2>

        <div className={styles.wishlistGrid}>
          {/* <!-- Card 1 --> */}
          <div className={styles.productCard}>
            <Link to="/productdetail">
              <div className={styles.productImageContainer}>
                <img src="/First-React/images/img_64.jpg" alt="Black T-shirt" />
                <div className={styles.productRating}>4.2 ⭐ | 3.4k</div>
              </div>
              <div className={styles.productDetails}>
                <h3 className={styles.productBrand}>Roadster</h3>
                <h4 className={styles.productName}>Men Solid Round Neck T-shirt</h4>
                <div className={styles.productPrice}>
                  <span className={styles.discountedPrice}>Rs. 299</span>
                  <span className={styles.originalPrice}>Rs. 599</span>
                  <span className={styles.discountPercent}>(50% OFF)</span>
                </div>
              </div>
            </Link>
            <div
              className={styles.productActions}
              style={{ display: "flex", gap: "8px", padding: " 0 10px 10px" }}>
              <button
                className={styles.btnWishlist}
                style={{
                  flex: "1",
                  background: "var(--primary-pink)",
                  color: "white",
                  borderColor: "var(--primary-pink)",
                }}>
                MOVE TO BAG
              </button>
              <button
                className={styles.btnWishlist}
                style={{ width: "42px", flex: "none", fontSize: "16px" }}
                onclick="this.closest('.product-card').remove()">
                ✕
              </button>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div className={styles.productCard}>
            <Link to="/productdetail">
              <div className={styles.productImageContainer}>
                <img src="/First-React/images/img_81.jpg" alt="Running Shoes" />
                <div className={styles.productRating}>4.5 ⭐ | 1.2k</div>
              </div>
              <div className={styles.productDetails}>
                <h3 className={styles.productBrand}>Puma</h3>
                <h4 className={styles.productName}>Men Running Sports Shoes</h4>
                <div className={styles.productPrice}>
                  <span className={styles.discountedPrice}>Rs. 3,199</span>
                  <span className={styles.originalPrice}>Rs. 4,999</span>
                  <span className={styles.discountPercent}>(36% OFF)</span>
                </div>
              </div>
            </Link>
            <div
              className={styles.productActions}
              style={{ display: "flex", gap: "8px", padding: "0 10px 10px" }}>
              <button
                className={styles.btnWishlist}
                style={{
                  flex: "1",
                  background: "var(--primary-pink)",
                  color: "white",
                  borderColor: "var(--primary-pink)",
                }}>
                MOVE TO BAG
              </button>
              <button
                className={styles.btnWishlist}
                style={{ width: "42px", flex: "none", fontSize: "16px" }}
                onclick="this.closest('.product-card').remove()">
                ✕
              </button>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div className={styles.productCard}>
            <Link to="/productdetail">
              <div className={styles.productImageContainer}>
                <img src="/First-React/images/img_82.jpg" alt="Watch" />
                <div className={styles.productRating}>4.3 ⭐ | 560</div>
              </div>
              <div className={styles.productDetails}>
                <h3 className={styles.productBrand}>Fossil</h3>
                <h4 className={styles.productName}>Men Analog Chronograph Watch</h4>
                <div className={styles.productPrice}>
                  <span className={styles.discountedPrice}>Rs. 8,495</span>
                  <span className={styles.originalPrice}>Rs. 12,995</span>
                  <span className={styles.discountPercent}>(35% OFF)</span>
                </div>
              </div>
            </Link>
            <div
              className={styles.productActions}
              style={{ display: "flex", gap: "8px", padding: "0 10px 10px" }}>
              <button
                className={styles.btnWishlist}
                style={{
                  flex: "1",
                  background: "var(--primary-pink)",
                  color: "white",
                  borderColor: "var(--primary-pink)",
                }}>
                MOVE TO BAG
              </button>
              <button
                className={styles.btnWishlist}
                style={{ width: "42px", flex: "none", fontSize: "16px" }}
                onclick="this.closest('.product-card').remove()">
                ✕
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
