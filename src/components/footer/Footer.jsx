import styles from "../header/Header.module.css";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const isAuth =
    location.pathname === "/login" || location.pathname === "/signup";
  
  if (isAuth) {
    return null;
  }
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerColumn}>
            <h3>ONLINE SHOPPING</h3>
            <ul>
              <li>
                <a href="men.html">Men</a>
              </li>
              <li>
                <a href="women.html">Women</a>
              </li>
              <li>
                <a href="kids.html">Kids</a>
              </li>
              <li>
                <a href="home-living.html">Home & Living</a>
              </li>
              <li>
                <a href="beauty.html">Beauty</a>
              </li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Myntra Insider</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>CUSTOMER POLICIES</h3>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">T&C</a>
              </li>
              <li>
                <a href="#">Terms Of Use</a>
              </li>
              <li>
                <a href="#">Track Orders</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Cancellation</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>EXPERIENCE MYNTRA APP ON MOBILE</h3>
            <div
              className={styles.appLinks}
              style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
              <img
                src="/images/img_12.png"
                alt="Google Play"
                style={{ height: "42px" }}
              />
              <img
                src="/images/img_13.png"
                alt="App Store"
                style={{ height: "42px" }}
              />
            </div>
            <h3>KEEP IN TOUCH</h3>
            <div
              className={styles.socialinks}
              style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              Social Icons Placeholders
              <svg
                style={{ width: "24px", height: "24px" }}
                fill="#696b79"
                viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z" />
              </svg>
              <svg
                style={{ width: "24px", height: "24px" }}
                fill="#696b79"
                viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              <svg
                style={{ width: "24px", height: "24px" }}
                fill="#696b79"
                viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <svg
                style={{ width: "24px", height: "24px" }}
                fill="#696b79"
                viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
          </div>
        </div>
        <div className={`${styles.footerContainer} ${styles.footerGuarantees}`}>
          <div className={styles.guaranteeItem}>
            <img
              src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d569ec871574604275407-original.png"
              alt="100% ORIGINAL"
            />
            <p>
              <span>100% ORIGINAL</span> guarantee for all products at
              myntra.com
            </p>
          </div>
          <div className={styles.guaranteeItem}>
            <img src="/images/img_15.png" alt="Return within 14days" />
            <p>
              <span>Return within 14days</span> of receiving your order
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
