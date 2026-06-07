import styles from "@/pages/cart.module.css"

export default function Payment() {
  return (
    <>
      <div className={`${styles.cartMain} container`}>
        <div className={styles.checkoutSteps}>
          <div className={`${styles.step} ${styles.done}`}>
            <span className={styles.stepNum}>✔</span>
            <span className={styles.stepLabel}>BAG</span>
          </div>
          <div className={`${styles.stepLine} ${styles.activeLine}`}></div>
          <div className={`${styles.step} ${styles.done}`}>
            <span className={styles.stepNum}>✔</span>
            <span className={styles.stepLabel}>ADDRESS</span>
          </div>
          <div className={`${styles.stepLine} ${styles.activeLine}`}></div>
          <div className={`${styles.step} ${styles.active}`}>
            <span className={styles.stepNum}>3</span>
            <span className={styles.stepLabel}>PAYMENT</span>
          </div>
        </div>

        <div className={styles.paymentLayout}>
          <div className={styles.paymentPanel}>
            <h2 className={styles.addressHeader}>Select Payment Method</h2>

            {/* <!-- UPI --> */}
            <div className={styles.paymentOption}>
              <div className={styles.paymentOptionHeader}>
                <input type="radio" name="payment" id="upi" checked />
                <label for="upi">UPI</label>
              </div>
              <div className={styles.paymentOptionBody}>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-light)",
                    marginBottom: "12px",
                  }}>
                  Pay by any UPI app
                </p>
                <div className={styles.upiInput}>
                  <input
                    type="text"
                    placeholder="Enter UPI ID (e.g. name@bank)"
                  />

                  <button>VERIFY</button>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    marginTop: "16px",
                    alignItems: "center",
                  }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png"
                    alt="UPI"
                    style={{height:'28px'}}
                  />
                  <span style={{fontSize:'13px', color:'var(--text-gray)'}}>
                    Or pay via GPay, PhonePe, Paytm UPI
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Credit / Debit Card --> */}
            <div className={styles.paymentOption}>
              <div className={styles.paymentOptionHeader}>
                <input type="radio" name="payment" id="card" />
                <label for="card">Credit / Debit Card</label>
              </div>
              <div className={styles.paymentOptionBody} style={{display:'none'}}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Card Number</label>
                    <input
                      type="text"
                      placeholder="Enter card number"
                      maxlength="19"
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Name on Card</label>
                    <input type="text" placeholder="Name on card" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Expiry (MM/YY)</label>
                    <input type="text" placeholder="MM / YY" maxlength="5" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>CVV</label>
                    <input type="password" placeholder="CVV" maxlength="3" />
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Net Banking --> */}
            <div className={styles.paymentOption}>
              <div className={styles.paymentOptionHeader}>
                <input type="radio" name="payment" id="netbanking" />
                <label for="netbanking">Net Banking</label>
              </div>
            </div>

            {/* <!-- EMI --> */}
            <div className={styles.paymentOption}>
              <div className={styles.paymentOptionHeader}>
                <input type="radio" name="payment" id="emi" />
                <label for="emi">EMI (Easy Installments)</label>
              </div>
            </div>

            {/* <!-- COD --> */}
            <div className={styles.paymentOption}>
              <div className={styles.paymentOptionHeader}>
                <input type="radio" name="payment" id="cod" />
                <label for="cod">Cash on Delivery</label>
              </div>
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
            <button
              className={styles.placeOrderBtn}
              style={{width:'100%', border:'none', cursor:'pointer', fontFamily: 'inherit'}}>
              PAY NOW
            </button>
            <p className={styles.safePay}>
              🔒 Safe and Secure Payments. 100% Authentic Products.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
