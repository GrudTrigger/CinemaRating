"use client";
import styles from "./Topten.module.css";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Topten = ({topTenFilms}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 5,
    initialSlide: 0,
  };

  const films = topTenFilms.docs;
  console.log(films);
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <Image src={"/top10.svg"} width={116} height={28} />
        <div className={styles.topDescr}>за неделю</div>
      </div>
      <Slider {...settings}>
        {films.map((film) => {
          return (
              <div key={film.id} className={styles.wrapperItems}>
                <div className={styles.item}>
                  <Image
                      className={styles.imageItem}
                      src={film.poster.url}
                      alt="topTenImage"
                      width={224}
                      height={455}
                  />
                  <div className={styles.wrapperDescr}>
                    <Image src="/number/number1.svg" width={48} height={66} />
                  </div>
                </div>
              </div>
          )
        })}
      </Slider>
    </div>
  );
};

// <div className={styles.wrapperItems}>
//   <div className={styles.item}>
//     <Image
//         className={styles.imageItem}
//         src={"/top.jpg"}
//         alt="top"
//         width={224}
//         height={455}
//     />
//     <div className={styles.wrapperDescr}>
//       <Image src="/number/number1.svg" width={48} height={66} />
//     </div>
//   </div>
// </div>