"use client";
import styles from "./FavouritesFilms.module.css";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactLoading from "react-loading";

export const FavouritesFilms = () => {
  const { userId } = useAuth();
  const [films, setFilms] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const handlerDeleteFilm = (filmId) => {
    fetch(
      `https://six-conscious-fork.glitch.me/favorites/userId=${userId}&filmId=${filmId}`,
      {
        method: "DELETE",
      }
    ).then(() => {
      setFilms((prevFilms) => prevFilms.filter((film) => film.id !== filmId));
    });
  };
  useEffect(() => {
    const fetchFilms = async () => {
      setIsLoading(false);
      const response = await fetch(
        `https://six-conscious-fork.glitch.me/favorites?userId=${userId}`
      );
      const data = await response.json();
      setIsLoading(true);
      setFilms(data);
    };
    fetchFilms();
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Избранное</h1>
      {!isLoading ? (
        <ReactLoading
          type={"spinningBubbles"}
          color={"#ea003d"}
          height={"5%"}
          width={"5%"}
          className="loading-ring"
        />
      ) : (
        <div className={styles.wrapperFilms}>
          {films &&
            films.map((film, index) => (
              <div key={index} className={styles.film}>
                <Link
                  className={styles.linkFilm}
                  href={`/films/${film.filmId}`}
                >
                  <Image
                    className={styles.filmImage}
                    src={film.srcImage}
                    alt={film.title}
                    width={153}
                    height={235}
                  />
                  <p className={styles.filmTitle}>{film.title}</p>
                </Link>
                <div
                  className={styles.closeIcon}
                  onClick={() => handlerDeleteFilm(film.id)}
                >
                  <Image
                    src="/cancel.svg"
                    width={14}
                    height={14}
                    alt="cancel"
                    className="cnlbtn"
                  />
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
