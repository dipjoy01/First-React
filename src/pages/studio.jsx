import styles from "@/pages/studio.module.css";

export default function Studio() {
  return (
    <>
      {/* <!-- Studio Hero --> */}
      <div className={styles.studioHero}>
        <h1>
          Myntra <span>Studio</span>
        </h1>
        <p>
          Your personalised fashion feed. Discover looks curated by influencers
          & stylists.
        </p>
      </div>

      {/* <!-- Filter Tabs --> */}
      <div className={styles.studioTabs}>
        <button className={`${styles.tabBtn} active`}>For You</button>
        <button className={styles.tabBtn}>Trending</button>
        <button className={styles.tabBtn}>New Arrivals</button>
        <button className={styles.tabBtn}>Influencers</button>
        <button className={styles.tabBtn}>Casual</button>
        <button className={styles.tabBtn}>Ethnic</button>
        <button className={styles.tabBtn}>Party Wear</button>
      </div>

      {/* <!-- Studio Feed Grid (Instagram-like masonry) --> */}
      <div className={styles.studioFeed}>
        <div className={`${styles.studioCard} ${styles.tall}`}>
          <img src="/First-React/images/img_58.jpg" alt="Look 1" />
          <div className={styles.studioCardOverlay}>
            <div className={styles.influencerInfo}>
              <div className={styles.influencerAvatar}>A</div>
              <span>@fashionwithAnanya</span>
            </div>
            <p className={styles.lookTitle}>Boho Summer Vibe ☀️</p>
            <div className={styles.studioTags}>
              <span className={styles.tag}>Dress ₹1299</span>
              <span className={styles.tag}>Sandals ₹799</span>
            </div>
          </div>
          <button className={styles.likeBtn}>❤️ 2.4k</button>
        </div>

        <div className={styles.studioCard}>
          <img src="/First-React/images/img_59.jpg" alt="Look 2" />
          <div className={styles.studioCardOverlay}>
            <div className={styles.influencerInfo}>
              <div className={styles.influencerAvatar}>R</div>
              <span>@stylebyRohan</span>
            </div>
            <p className={styles.lookTitle}>
              ClassNameclassNameic Monochrome 🖤
            </p>
            <div className={styles.studioTags}>
              <span className={styles.tag}>Shirt ₹899</span>
              <span className={styles.tag}>Trousers ₹1499</span>
            </div>
          </div>
          <button className={styles.likeBtn}>❤️ 1.8k</button>
        </div>

        <div className={styles.studioCard}>
          <img src="/First-React/images/img_60.jpg" alt="Look 3" />
          <div className={styles.studioCardOverlay}>
            <div className={styles.influencerInfo}>
              <div className={styles.influencerAvatar}>P</div>
              <span>@priyastyles</span>
            </div>
            <p className={styles.lookTitle}>Ethnic Chic ✨</p>
            <div className={styles.studioTags}>
              <span className={styles.tag}>Kurta ₹2299</span>
              <span className={styles.tag}>Palazzo ₹999</span>
            </div>
          </div>
          <button className={styles.likeBtn}>❤️ 3.1k</button>
        </div>

        <div className={`${styles.studioCard} ${styles.tall}`}>
          <img src="/First-React/images/img_61.jpg" alt="Look 4" />
          <div className={styles.studioCardOverlay}>
            <div className={styles.influencerInfo}>
              <div className={styles.influencerAvatar}>S</div>
              <span>@stylesbySneha</span>
            </div>
            <p className={styles.lookTitle}>Casual Friday Fits 💼</p>
            <div className={styles.studioTags}>
              <span className={styles.tag}>Top ₹699</span>
              <span className={styles.tag}>Jeans ₹1899</span>
            </div>
          </div>
          <button className={styles.likeBtn}>❤️ 956</button>
        </div>

        <div className={styles.studioCard}>
          <img src="/First-React/images/img_62.jpg" alt="Look 5" />
          <div className={styles.studioCardOverlay}>
            <div className={styles.influencerInfo}>
              <div className={styles.influencerAvatar}>M</div>
              <span>@mehastyle</span>
            </div>
            <p className={styles.lookTitle}>Party Ready 🎉</p>
            <div className={styles.studioTags}>
              <span className={styles.tag}>Dress ₹3499</span>
              <span className={styles.tag}>Heels ₹2199</span>
            </div>
          </div>
          <button className={styles.likeBtn}>❤️ 4.2k</button>
        </div>

        <div className={styles.studioCard}>
          <img src="/First-React/images/img_63.jpg" alt="Look 6" />
          <div className={styles.studioCardOverlay}>
            <div className={styles.influencerInfo}>
              <div className={styles.influencerAvatar}>K</div>
              <span>@kavitafashion</span>
            </div>
            <p className={styles.lookTitle}>Weekend Brunch 🥂</p>
            <div className={styles.studioTags}>
              <span className={styles.tag}>Co-ord Set ₹2599</span>
            </div>
          </div>
          <button className={styles.likeBtn}>❤️ 1.5k</button>
        </div>
      </div>
    </>
  );
}
