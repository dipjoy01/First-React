import styles from "./HeroBanner.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const HeroBanner = () => {
  let [currentIndex, setCurrentIndex] = useState(0);
  let img = [1, 2, 3, 4, 5, 6, 7];

  let next = () => {
    setCurrentIndex((currentIndex + 1) % img.length);
  };
  let prev = () => {
    setCurrentIndex((currentIndex - 1 + img.length) % img.length);
  };

  return (
    <section className={styles.heroBanner}>
      <div className={styles.slider}>
        <div className={styles.prevSlide} onClick={prev}>
          &#8249;
        </div>
        <Link to="/product" className={styles.w100}>
          <img
            src={`/First-React/images/img_${img[currentIndex]}.jpg`}
            alt="End of Reason Sale"
            className={styles.bannerImg}
          />
        </Link>
        <div className={styles.nextButton} onClick={next}>
          &#8250;
        </div>
        <div className={styles.dotsContainer}>
          {img.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
