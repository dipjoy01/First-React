import styles from "@/pages/profile.module.css";

import { Link } from "react-router-dom";
export default function Order() {
  return (
    <>
      <div className={styles.profileMain}>
        <aside className={styles.profileSidebar}>
          <div className={styles.profileUser}>
            <div className={styles.profileAvatar}>RS</div>
            <div className={styles.profileUserInfo}>
              <h3>Rahul Sharma</h3>
              <p>rahul.sharma@email.com</p>
            </div>
          </div>
          <nav className={styles.sidebarMenu}>
            <div className={styles.sidebarSectionTitle}>Overview</div>
            <Link to="/profile" className={styles.sidebarLink}>
              <svg viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Profile
            </Link>
            <Link
              to="/order"
              className={`${styles.sidebarLink} ${styles.active}`}>
              <svg viewBox="0 0 24 24">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              Orders
            </Link>
            <Link to="/whishlist" className={styles.sidebarLink}>
              <svg viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              Wishlist
            </Link>
            <div className={styles.sidebarSectionTitle}>Account</div>
            <a href="#" className={styles.sidebarLink}>
              <svg viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              Coupons
            </a>
            <a href="#" className={styles.sidebarLink}>
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Myntra Credit
            </a>
          </nav>
        </aside>

        <main className={styles.profileContent}>
          <h2 className={styles.contentHeader}>My Orders</h2>
          <div className={styles.ordersList}>
            {/* <!-- Order 1 --> */}
            <div className={styles.orderCard}>
              <div className={styles.orderCardHeader}>
                <span className={styles.orderId}>
                  Order <strong>#MYN-20260420-7892</strong>
                </span>
                <span className={styles.orderDate}>Placed on: 20 Apr, 2026</span>
                <span className={`${styles.orderStatus} ${styles.delivered}`}>Delivered</span>
              </div>
              <div className={styles.orderItem}>
                <img src="/images/img_76.jpg" alt="Black T-shirt" />
                <div className={styles.orderItemInfo}>
                  <h4>Roadster</h4>
                  <p>Men Solid Round Neck Black T-shirt</p>
                  <p>Size: M &nbsp; | &nbsp; Qty: 1</p>
                  <span className={styles.itemPrice}>Rs. 299</span>
                </div>
              </div>
              <div className="order-card-footer">
                <span className="order-total">Total: Rs. 299</span>
                <div className="order-actions">
                  <button className="order-btn">Exchange</button>
                  <button className="order-btn">Return</button>
                  <button className="order-btn primary">Review</button>
                </div>
              </div>
            </div>

            {/* <!-- Order 2 --> */}
            <div className={styles.orderCard}>
              <div className={styles.orderCardHeader}>
                <span className={styles.orderId}>
                  Order <strong>#MYN-20260415-4531</strong>
                </span>
                <span className={styles.orderDate}>Placed on: 15 Apr, 2026</span>
                <span className="order-status shipped">In Transit</span>
              </div>
              <div className={styles.orderItem}>
                <img src="/images/img_77.jpg" alt="Shoes" />
                <div className={styles.orderItemInfo}>
                  <h4>Puma</h4>
                  <p>Men Running Sports Shoes</p>
                  <p>Size: UK 9 &nbsp; | &nbsp; Qty: 1</p>
                  <span className={styles.itemPrice}>Rs. 3,199</span>
                </div>
              </div>
              <div className={styles.orderItem}>
                <img src="/images/img_79.jpg" alt="Watch" />
                <div className={styles.orderItemInfo}>
                  <h4>Fossil</h4>
                  <p>Men Analog Chronograph Watch</p>
                  <p>Size: One Size &nbsp; | &nbsp; Qty: 1</p>
                  <span className={styles.itemPrice}>Rs. 8,495</span>
                </div>
              </div>
              <div className="order-card-footer">
                <span className="order-total">Total: Rs. 11,694</span>
                <div className="order-actions">
                  <button className="order-btn primary">Track Order</button>
                </div>
              </div>
            </div>

            {/* <!-- Order 3 --> */}
            <div className={styles.orderCard}>
              <div className={styles.orderCardHeader}>
                <span className={styles.orderId}>
                  Order <strong>#MYN-20260402-1234</strong>
                </span>
                <span className={styles.orderDate}>Placed on: 02 Apr, 2026</span>
                <span className={`$order-status $delivered`}>Delivered</span>
              </div>
              <div className={styles.orderItem}>
                <img src="/images/img_80.jpg" alt="Jacket" />
                <div className={styles.orderItemInfo}>
                  <h4>H&M</h4>
                  <p>Men Denim Jacket</p>
                  <p>Size: L &nbsp; | &nbsp; Qty: 1</p>
                  <span className={styles.itemPrice}>Rs. 2,499</span>
                </div>
              </div>
              <div className="order-card-footer">
                <span className="order-total">Total: Rs. 2,499</span>
                <div className="order-actions">
                  <button className="order-btn">Exchange</button>
                  <button className="order-btn primary">Review</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
