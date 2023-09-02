"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./Slider.module.css";


export const TestSlider = ({data}) => {
  const films = data.docs;
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1, // Установите 1, чтобы отображать одно изображение
    speed: 500,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  console.log(data)
  return (
    <div style={{ marginTop: "20px" }}>
      <Slider className={styles.customSlider} {...settings}>
        {films.map((film) => {
          return (
              <div className={styles.customSlide} key={film.id}> {/* Важно добавить ключ (key) */}
                <Image className={styles.sliderImage} src={film.poster.url} alt="image" width={1200} height={387} />
                <button className={styles.sliderButton}>Смотреть бесплатно</button>
              </div>
          );
        })}
      </Slider>
    </div>
  );
};
