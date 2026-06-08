import { Link } from "react-router-dom";
import styles from "@/pages/login.module.css";

function SignUp() {
  return (
    <>
      <div className={styles.authBody}>
        <div className={styles.authWrapper}>
          {/* <!-- Left Panel --> */}
          <div className={styles.authLeft}>
            <a href="index.html" className={styles.authLogo}>
              <svg
                viewBox="0 0 45 32"
                style={{ height: "50px", width: "70px" }}>
                <path
                  fill="#fff"
                  d="M14.4 0c-.5 0-.9.2-1.3.5l-12.7 13.5c-.5.6-.5 1.5 0 2.1l12.7 13.5c.3.3.8.5 1.3.5h7c.8 0 1.5-.7 1.5-1.5V1.5C22.9.7 22.2 0 21.4 0h-7zm6.7 3v24l-9.8-10.4c-.4-.5-.4-1.3 0-1.8L21.1 3z"></path>
                <path
                  fill="rgba(255,255,255,0.7)"
                  d="M30.6 0h-7c-.8 0-1.5.7-1.5 1.5v27c0 .8.7 1.5 1.5 1.5h7c.5 0 .9-.2 1.3-.5l12.7-13.5c.5-.6.5-1.5 0-2.1L31.9.5c-.3-.3-.8-.5-1.3-.5zm-5.2 3L35.2 13.4c.4.5.4 1.3 0 1.8L25.4 27V3z"></path>
              </svg>
              <span>myntra</span>
            </a>
            <div className={styles.authLeftContent}>
              <h2>Already have an account?</h2>
              <p>
                Log in with your mobile number or email to continue shopping
              </p>
              <Link to="/login" className={styles.btnOutlineWhite}>
                LOGIN
              </Link>
            </div>
            <div className={styles.authLeftFooter}>
              <img
                src="/images/img_12.png"
                alt="Google Play"
                style={{ height: "34px", filter: "brightness(0) invert(1)" }}
              />
              <img
                src="/images/img_13.png"
                alt="App Store"
                style={{ height: "34px", filter: "brightness(0) invert(1)" }}
              />
            </div>
          </div>

          {/* <!-- Right Panel --> */}
          <div className={styles.authRight}>
            <h2 className={styles.authTitle}>Create Account</h2>
            <p className={styles.authSubtitle}>
              Join Myntra and get access to exclusive deals, your wishlist &
              much more
            </p>

            <form className={styles.authForm} onsubmit="handleSignup(event)">
              <div className={styles.formGroup}>
                <label for="signup-name">Full Name</label>
                <input
                  type="text"
                  id="signup-name"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label for="signup-email">Email Address</label>
                <input
                  type="email"
                  id="signup-email"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label for="signup-mobile">Mobile Number</label>
                <div className={styles.inputWithPrefix}>
                  <span className={styles.inputPrefix}>+91</span>
                  <input
                    type="tel"
                    id="signup-mobile"
                    placeholder="Enter 10-digit mobile number"
                    maxlength="10"
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label for="signup-password">Create Password</label>
                <div className={styles.inputWithAction}>
                  <input
                    type="password"
                    id="signup-password"
                    placeholder="Minimum 8 characters"
                    minlength="8"
                    required
                  />
                  <button
                    type="button"
                    className={styles.inputActionBtn}
                    onclick="togglePassword('signup-password', this)">
                    Show
                  </button>
                </div>
                <div className={styles.passwordStrength} id="strength-bar">
                  <div className={styles.strengthFill} id="strength-fill"></div>
                </div>
                <span
                  className={styles.strengthLabel}
                  id="strength-label"></span>
              </div>

              <div className={styles.formGroup}>
                <label for="signup-confirm">Confirm Password</label>
                <div className={styles.inputWithAction}>
                  <input
                    type="password"
                    id="signup-confirm"
                    placeholder="Re-enter your password"
                    required
                  />
                  <button
                    type="button"
                    className={styles.inputActionBtn}
                    onclick="togglePassword('signup-confirm', this)">
                    Show
                  </button>
                </div>
                <span className={styles.fieldError} id="confirm-error"></span>
              </div>

              <div className={`${styles.formGroup} ${styles.formCheck}`}>
                <input type="checkbox" id="terms-check" required />
                <label for="terms-check">
                  I agree to Myntra's <a href="#">Terms of Use</a> and{" "}
                  <a href="#">Privacy Policy</a>
                </label>
              </div>

              <div className={`${styles.formGroup} ${styles.formCheck}`}>
                <input type="checkbox" id="promo-check" checked />
                <label for="promo-check">
                  Send me exclusive deals, offers and updates via email & SMS
                </label>
              </div>

              <button type="submit" className={styles.btnAuthPrimary}>
                CREATE ACCOUNT
              </button>

              <div className={styles.authDivider}>
                <span>OR</span>
              </div>

              <button type="button" className={styles.btnAuthSecondary}>
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Sign up with Google
              </button>
            </form>

            <p className={styles.authSwitch}>
              Already have an account? <a href="login.html">Login</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
