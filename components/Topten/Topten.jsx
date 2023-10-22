"use client";
import styles from "./Topten.module.css";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageContainer } from "../ImageContainer/ImageContainer";
import React from "react";
import Link from "next/link";

export const Topten = ({ topTenFilms, type }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 5,
    initialSlide: 0,
    arrows: false,
  };

  const films = topTenFilms.docs;

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <Image src={"/top10.svg"} width={116} height={28} alt="test" />
        <div className={styles.topDescr}>
          {type === "films" ? "фильмов" : "сериалов"}
        </div>
      </div>
      <Slider {...settings}>
        {films.map((film, index) => {
          return (
            <div key={film.id} className={styles.wrapperItems}>
              <div className={styles.item}>
                {type === "films" ? (
                  <Link href={`/films/${film.id}`}>
                    <ImageContainer image={film.poster.url} type={"topTen"} />
                  </Link>
                ) : (
                  <Link href={`/series/${film.id}`}>
                    <ImageContainer image={film.poster.url} type={"topTen"} />
                  </Link>
                )}
                <div className={styles.wrapperDescr}>
                  <Image
                    src={`/number/number${index + 1}.svg`}
                    width={48}
                    height={66}
                    alt={"numbers"}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
