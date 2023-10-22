import styles from "./Films.module.css";
import Image from "next/image";
import Link from "next/link";

export const Films = ({ films, handleShowMore }) => {
  const currentArrayFilms = films.docs;
  return (
    <div className={styles.container}>
      <div className={styles.wrapperFilms}>
        {currentArrayFilms.map((film, index) => {
          if (film.type === "tv-series") {
            return (
              <div key={index} className={styles.film}>
                <Link className={styles.linkFilm} href={`/series/${film.id}`}>
                  <Image
                    className={styles.filmImage}
                    src={film.poster.url}
                    alt={film.name}
                    width={153}
                    height={235}
                  />
                  <h4 className={styles.filmTitle}>{film.name}</h4>
                </Link>
              </div>
            );
          } else {
            return (
              <div key={index} className={styles.film}>
                <Link className={styles.linkFilm} href={`/films/${film.id}`}>
                  <Image
                    className={styles.filmImage}
                    src={film.poster.url}
                    alt={film.name}
                    width={153}
                    height={235}
                  />
                  <h4 className={styles.filmTitle}>{film.name}</h4>
                </Link>
              </div>
            );
          }
        })}
      </div>
      {/* <div style={{ margin: "0 auto", width: "120px" }}>
        <button className={styles.button} onClick={handleShowMore}>
          Загрузить еще
        </button>
      </div> */}
    </div>
  );
};
