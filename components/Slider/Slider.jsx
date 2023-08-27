"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./Slider.module.css";

export const TestSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 2,
    speed: 500,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider className={styles.customSlider} {...settings}>
        <div className={styles.customSlide}>
          <Image src={"/image-0.jpg"} alt="image" width={1200} height={370} />
        </div>
        <div className={styles.customSlide}>
          <Image src={"/image-1.jpg"} alt="image" width={1200} height={370} />
        </div>
        <div className={styles.customSlide}>
          <Image src={"/image-2.jpg"} alt="image" width={1200} height={370} />
        </div>
      </Slider>
    </div>
  );
};
