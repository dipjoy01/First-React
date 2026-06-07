import styles from "@/pages/profile.module.css"

import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <div className={styles.profileMain}>
        {/* <!-- Sidebar --> */}
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
            <Link to ="/profile" className={`${styles.sidebarLink} ${styles.active}`}>
              <svg viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Profile
            </Link>
            <Link to ="/order" className={styles.sidebarLink}>
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
            <a href="#" className={styles.sidebarLink}>
              <svg viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              Myntra Insider
            </a>

            <div className={styles.sidebarSectionTitle}>Legal</div>
            <a href="#" className={styles.sidebarLink}>
              <svg viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              Terms of Use
            </a>
            <a href="#" className={styles.sidebarLink}>
              <svg viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              Privacy Policy
            </a>
          </nav>
        </aside>

        {/* <!-- Content --> */}
        <main className={styles.profileContent}>
          {/* <!-- Insider Card --> */}
          <div className={styles.insiderCard}>
            <h3>Myntra Insider</h3>
            <p>
              You are a <strong>Select</strong> member
            </p>
            <div className={styles.points}>1,250</div>
            <p>Insider Points Available</p>
          </div>

          <h2 className={styles.contentHeader}>Profile Details</h2>
          <div className={styles.profileInfoForm}>
            <div className={styles.infoRow}>
              <span className={styles.infolabel}>Full Name</span>
              <span className={styles.infoValue}>Rahul Sharma</span>
              <span className={styles.infoEdit}>Edit</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infolabel}>Mobile Number</span>
              <span className={styles.infoValue}>+91 9876543210</span>
              <span className={styles.infoEdit}>Edit</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infolabel}>Email ID</span>
              <span className={styles.infoValue}>rahul.sharma@email.com</span>
              <span className={styles.infoEdit}>Edit</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infolabel}>Gender</span>
              <span className={styles.infoValue}>Male</span>
              <span className={styles.infoEdit}>Edit</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infolabel}>Date of Birth</span>
              <span className={styles.infoValue}>15 March, 1995</span>
              <span className={styles.infoEdit}>Edit</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infolabel}>Location</span>
              <span className={styles.infoValue}>New Delhi</span>
              <span className={styles.infoEdit}>Edit</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infolabel}>Alternate Mobile</span>
              <span className={styles.infoValue} style={{color: "var(--text-gray)"}}>
                - not added -
              </span>
              <span className={styles.infoEdit}>+ Add</span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
