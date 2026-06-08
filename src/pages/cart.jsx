import styles from "@/pages/cart.module.css";
import { Link } from "react-router-dom";
function cart() {
  return (
    <>
      <div className={`${styles.cartMain} container`}>
        {/* Checkout Progress  */}
        <div className={styles.checkoutSteps}>
          <div className={`${styles.step} ${styles.active}`}>
            <span className={styles.stepNum}>1</span>
            <span className={styles.stepLabel}>BAG</span>
          </div>
          <div className={styles.stepLine}></div>
          <div className={styles.step}>
            <span className={styles.stepNum}>2</span>
            <span className={styles.stepLabel}>ADDRESS</span>
          </div>
          <div className={styles.stepLine}></div>
          <div className={styles.step}>
            <span className={styles.stepNum}>3</span>
            <span className={styles.stepLabel}>PAYMENT</span>
          </div>
        </div>

        <div className={styles.cartLayout}>
          {/* Cart Items  */}
          <div className={styles.cartItemsSection}>
            <div className={styles.cartItem}>
              <img
                src="/First-React/images/img_76.jpg"
                alt="T-Shirt"
                className={styles.cartItemImg}
              />
              <div className={styles.cartItemDetails}>
                <h3>Roadster</h3>
                <p>Men Solid Round Neck Black T-shirt</p>
                <div className={styles.itemMeta}>
                  <span>
                    Size: <strong>M</strong>
                  </span>
                  <span>
                    Qty: <strong>1</strong>
                  </span>
                </div>
                <div className={styles.itemPrice}>
                  <strong>Rs. 299</strong>
                  <span className={styles.originalPrice}>Rs. 599</span>
                  <span className={styles.discountPercent}>50% OFF</span>
                </div>
                <div className={styles.itemActions}>
                  <button
                    className={styles.itemBtn}
                    onclick="this.closest('.cart-item').remove()">
                    REMOVE
                  </button>
                  <button className={styles.itemBtn}>MOVE TO WISHLIST</button>
                </div>
              </div>
            </div>

            <div className={styles.cartItem}>
              <img
                src="/First-React/images/img_77.jpg"
                alt="Shoes"
                className={styles.cartItemImg}
              />
              <div className={styles.cartItemDetails}>
                <h3>Puma</h3>
                <p>Men Running Sports Shoes</p>
                <div className={styles.itemMeta}>
                  <span>
                    Size: <strong>UK 9</strong>
                  </span>
                  <span>
                    Qty: <strong>1</strong>
                  </span>
                </div>
                <div className={styles.itemPrice}>
                  <strong>Rs. 3,199</strong>
                  <span className={styles.originalPrice}>Rs. 4,999</span>
                  <span className={styles.discountPercent}>36% OFF</span>
                </div>
                <div className={styles.itemActions}>
                  <button
                    className={styles.itemBtn}
                    onclick="this.closest('.cart-item').remove()">
                    REMOVE
                  </button>
                  <button className={styles.itemBtn}>MOVE TO WISHLIST</button>
                </div>
              </div>
            </div>

            <div className={styles.couponSection}>
              <h4>🏷️ Apply Coupon</h4>
              <div className={styles.couponInput}>
                <input type="text" placeholder="Enter coupon code" />
                <button>APPLY</button>
              </div>
            </div>
          </div>

          {/* <!-- Price Summary --> */}
          <div className={styles.priceSummary}>
            <h3 className={styles.summaryTitle}>PRICE DETAILS (2 Items)</h3>
            <div className={styles.summaryRow}>
              <span>Total MRP</span>
              <span>Rs. 5,598</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.discount}`}>
              <span>Discount on MRP</span>
              <span className={styles.green}>-Rs. 2,100</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Coupon Discount</span>
              <span className={styles.pink}>Apply Coupon</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Convenience Fee</span>
              <span>
                <del>Rs. 99</del> <span className={styles.green}>FREE</span>
              </span>
            </div>
            <div className={styles.summaryDivider}></div>
            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Total Amount</span>
              <span>Rs. 3,498</span>
            </div>
            <Link to="/checkout" className={styles.placeOrderBtn}>
              PLACE ORDER
            </Link>
            <p className={styles.safePay}>
              🔒 Safe and Secure Payments. 100% Authentic Products.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default cart;
