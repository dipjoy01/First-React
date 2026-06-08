import styles from "@/pages/pdp.module.css";
import { Link } from "react-router-dom";
function ProductDetail() {
  return (
    <>
      <div className={`${styles.pdpMain} container`}>
        <div className={styles.breadCrumbs} style={{ padding: "14px 0" }}>
          <Link to="/">Home</Link> / <a href="men.html">Men</a> /{" "}
          <Link to="/product">T-Shirts</Link> /{" "}
          <span>Roadster Men Solid T-shirt</span>
        </div>

        <div className={styles.pdpLayout}>
          {/* <!-- Left: Image Gallery --> */}
          <div className={styles.pdpGallery}>
            <div className={styles.galleryThumbnails}>
              <img
                src="/First-React/images/img_68.jpg"
                alt="View 1"
                className={`${styles.thumb} active`}
              />
              <img
                src="/First-React/images/img_69.jpg"
                alt="View 2"
                className={styles.thumb}
              />
              <img
                src="/First-React/images/img_70.jpg"
                alt="View 3"
                className={styles.thumb}
              />
              <img
                src="/First-React/images/img_71.jpg"
                alt="View 4"
                className={styles.thumb}
              />
            </div>
            <div className={styles.galleryMain}>
              <img
                id="div-image"
                src="/First-React/images/img_72.jpg"
                alt="div Product Image"
              />
              <div className={styles.galleryNav}>
                <button className={styles.galleryBtn} id="prev-btn">
                  &#8249;
                </button>
                <button className={styles.galleryBtn} id="next-btn">
                  &#8250;
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Right: Product Info --> */}
          <div className={styles.pdpInfo}>
            <h2 className={styles.pdpBrand}>Roadster</h2>
            <h1 className={styles.pdpName}>
              Men Solid Round Neck Black T-shirt
            </h1>

            <div className={styles.pdpRating}>
              <span className={styles.ratingBadge}>4.2 ⭐</span>
              <span className={styles.ratingCount}>3,421 Ratings & 312 Reviews</span>
            </div>

            <div className={styles.pdpPriceSection}>
              <span className={styles.pdpDiscounted}>Rs. 299</span>
              <span className={styles.pdpOriginal}>Rs. 599</span>
              <span className={styles.pdpDiscount}>50% OFF</span>
            </div>

            <p className={styles.offerTag}>inclusive of all taxes</p>

            <div className={styles.pdpOffers}>
              <h4>Available Offers</h4>
              <ul>
                <li>
                  🏷️ <strong>Bank Offer</strong>: 10% off on HDFC Bank Credit
                  Cards
                </li>
                <li>
                  🏷️ <strong>Special Price</strong>: Extra 5% off (price
                  inclusive)
                </li>
              </ul>
            </div>

            <div className={styles.pdpSizeSection}>
              <div className={styles.sizeHeader}>
                <h4>Select Size</h4>
                <span className={styles.sizeGuide}>SIZE GUIDE</span>
              </div>
              <div className={styles.sizeOptions}>
                <button className={styles.sizeBtn}>S</button>
                <button className={`${styles.sizeBtn} ${styles.active}`}>M</button>
                <button className={styles.sizeBtn}>L</button>
                <button className={styles.sizeBtn}>XL</button>
                <button className={styles.sizeBtn}>XXL</button>
              </div>
            </div>

            <div className={styles.pdpCtas}>
              <Link to='/cart' className={styles.ctaBag}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                ADD TO BAG
              </Link>
              <a href="wishlist.html" className={styles.ctaWishlist}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                WISHLIST
              </a>
            </div>

            <div className={styles.pdpDelivery}>
              <h4>Delivery Options</h4>
              <div className={styles.pincodeCheck}>
                <input type="text" placeholder="Enter pincode" maxlength="6" />
                <button>CHECK</button>
              </div>
              <ul className={styles.deliveryInfo}>
                <li>✔ 100% Original Products</li>
                <li>✔ Pay on delivery might be available</li>
                <li>✔ Easy 14 days returns and exchanges</li>
              </ul>
            </div>

            <div className={styles.pdpProductDetails}>
              <h4>Product Details</h4>
              <ul>
                <li>
                  <strong>Fabric:</strong> 100% Cotton
                </li>
                <li>
                  <strong>Fit:</strong> Slim Fit
                </li>
                <li>
                  <strong>Neck:</strong> Round Neck
                </li>
                <li>
                  <strong>Sleeve:</strong> Short Sleeves
                </li>
                <li>
                  <strong>Pattern:</strong> Solid
                </li>
                <li>
                  <strong>Reversible:</strong> No
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
