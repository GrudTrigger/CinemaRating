"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Slider.module.css";
import {ImageContainer} from "@/components/ImageContainer/ImageContainer";
import Image from "next/image";
import Link from "next/link";


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

  return (
    <div style={{ marginTop: "20px"}}>
      <Slider className={styles.customSlider} {...settings}>
        {films.map((film) => {
          return (
              <div className={styles.customSlide} key={film.id}>
                {film.type === 'movie' ? <Link href={`/films/${film.id}`}>
                  <Image className={styles.image} src={film.poster.previewUrl} alt={'film.name'} width={400} height={550} />
                </Link> : <Link href={`/series/${film.id}`}>
                  <Image className={styles.image} src={film.poster.previewUrl} alt={'film.name'} width={400} height={550} />
                </Link>}
              </div>
          );
        })}
      </Slider>
    </div>
  );
};
