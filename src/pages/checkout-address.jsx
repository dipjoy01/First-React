
import styles from '@/pages/cart.module.css'
import { Link } from 'react-router-dom';

export default function ChkAddress() {
  return (
    <>
      <div className={`${styles.cartMain} container`}>
        <div className={styles.checkoutSteps}>
          <div className={styles.step}>
            <span className={styles.stepNum}>✔</span>
            <span className={styles.stepLabel}>BAG</span>
          </div>
          <div className={`${styles.stepLine} ${styles.activeLine}`}></div>
          <div className={`${styles.step} ${styles.active}`}>
            <span className={styles.stepNum}>2</span>
            <span className={styles.stepLabel}>ADDRESS</span>
          </div>
          <div className={styles.stepLine}></div>
          <div className={styles.step}>
            <span className={styles.stepNum}>3</span>
            <span className={styles.stepLabel}>PAYMENT</span>
          </div>
        </div>

        <div className={styles.addressLayout}>
          <div className={styles.addressPanel}>
            <h2 className={styles.addressHeader}>Select Delivery Address</h2>

            <div className={`${styles.savedAddress} ${styles.selected}`}>
              <h4>
                🏠 HOME — Rahul Sharma{" "}
                <span style={{fontWeight:'400', color:"#888"}}>| 9876543210</span>
              </h4>
              <p>42, Park Street, Sector 12, New Delhi, Delhi - 110001</p>
            </div>
            <div className={styles.savedAddress}>
              <h4>
                🏢 OFFICE — Rahul Sharma{" "}
                <span style={{fontWeight:'400', color:"#888"}}>| 9876543210</span>
              </h4>
              <p>Block C, Cyber City, Gurugram, Haryana - 122002</p>
            </div>

            <div className={styles.addressForm}>
              <h4>+ Add New Address</h4>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter full name" />
                </div>
                <div className={styles.formGroup}>
                  <label>Mobile Number</label>
                  <input type="tel" placeholder="10-digit mobile number" />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Pincode</label>
                  <input
                    type="text"
                    placeholder="6 digit pincode"
                    maxlength="6"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>State</label>
                  <select>
                    <option>Select State</option>
                    <option>Delhi</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                    <option>West Bengal</option>
                  </select>
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Address (House No, Building, Street, Area)</label>
                  <input type="text" placeholder="Enter address" />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Locality / Town</label>
                  <input
                    type="text"
                    placeholder="Enter locality or town name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>City / District</label>
                  <input type="text" placeholder="Enter city or district" />
                </div>
              </div>
              <button
                className={styles.placeOrderBtn}
                style={{width:'100%', marginTop:'10px', display:'block', border:'none', cursor:"pointer"}}>
                SAVE AND DELIVER HERE
              </button>
            </div>
          </div>

          <div className={styles.priceSummary}>
            <h3 className={styles.summaryTitle}>PRICE DETAILS (2 Items)</h3>
            <div className={styles.summaryRow}>
              <span>Total MRP</span>
              <span>Rs. 5,598</span>
            </div>
            <div className={styles.summaryRow}>
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
            <Link to="/payment" className={styles.placeOrderBtn}>
              CONTINUE
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
