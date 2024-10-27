import React, { useEffect, useState } from "react";
import styles from '../../styles/SalePageStyle/Slider.module.scss';

const Slider = () => {
  const slides = [
    "images/slide1.png",
    "images/slide2.png",
    "images/slide3.png",
    "images/slide4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]); // только slides.length в зависимостях

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles['slider_block']}>
      <div className={styles.slider}>
        <div
          className={styles["slider-inner"]}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img key={index} src={slide} alt="" />
          ))}
        </div>
        <div className={styles['slider-indicators']}>
          {slides.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${currentIndex === index ? `${styles.active}` : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;