"use client";
import styles from "./InfoFilm.module.css";
import Image from "next/image";
import { formatSeasons, formatTime } from "../helpers/helpers";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";

export const InfoFilm = ({ film }) => {
  const [userFilms, setUserFilms] = useState([]);
  const { userId } = useAuth();
  const srcImage = film.poster.url;
  const title = film.name;
  const filmId = film.id;
  const timeFilm = formatTime(film.movieLength);
  const allSeasons = film.seasonsInfo.length;

  const [isFavorite, setIsFavorite] = useState(false);
  console.log(film);
  useEffect(() => {
    const getFavoutiresFilmsUsers = () => {
      fetch(`https://six-conscious-fork.glitch.me/favorites?userID=${userId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => setUserFilms(data));
    };

    getFavoutiresFilmsUsers();
  }, []);

  const isFavouriteFilm = userFilms.find((el) => el.filmId === film.id);

  const addToFavorites = () => {
    const favFilms = {
      userId,
      filmId,
      title,
      srcImage,
    };
    fetch("https://six-conscious-fork.glitch.me/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(favFilms),
    }).then(() => {
      console.log("Add fav films");
    });
    setIsFavorite(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapperFilm}>
        <div className={styles.poster}>
          <div>
            <Image
              className={styles.posterImage}
              src={srcImage}
              width={719}
              height={680}
              alt={"Постер"}
            />
          </div>
        </div>
        <div className={styles.containerInfo}>
          <h1 className={styles.titleFilm}>{title}</h1>
          <div className={styles.paramsFilm}>
            <div className={styles.paramsList}>
              <div className={styles.params}>{film.year}</div>
              <div className={styles.params}>
                {allSeasons !== 0 ? formatSeasons(allSeasons) : timeFilm}
              </div>
              <div className={styles.params}>{film.ageRating}+</div>
            </div>
            <div className={styles.paramsList}>
              <div className={styles.params}>{film.countries[0].name}</div>
              {film.genres.map((genre, index) => {
                return (
                  <div className={styles.params} key={index}>
                    {genre.name[0].toUpperCase() + genre.name.slice(1)}
                  </div>
                );
              })}
            </div>
            <div className={styles.actorsList}>
              <div>
                <div className={styles.ratingFilm}>
                  <div className={styles.test}>{film.rating.imdb}</div>
                  <div className={styles.ratingDescr}>Рейтинг imdb</div>
                </div>
              </div>
              {film.persons.map((person, index) => {
                if (index < 3) {
                  return (
                    <div key={index} className={styles.actors}>
                      <Image
                        className={styles.actorImage}
                        src={person.photo}
                        alt={person.name}
                        width={56}
                        height={56}
                      />
                      <div className={styles.actor}>{person.name}</div>
                    </div>
                  );
                }
              })}
            </div>
            <div className={styles.descrWrapper}>
              <p className={styles.descrFilm}>{film.description}</p>
              {film.videos.trailers.length !== 0 ? (
                <div className={styles.borderLink}>
                  <Link
                    className={styles.trailerLink}
                    href={film.videos.trailers[0]?.url}
                  >
                    Смотреть трейлер
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wpapperFavBtn}>
        {!isFavouriteFilm && !isFavorite ? (
          <button className={styles.favBtn} onClick={addToFavorites}>
            Добавить в избранное
          </button>
        ) : (
          <div className={styles.favDiv}>В избранном</div>
        )}
      </div>
      <div className={styles.wrapperFilms}>
        {film.similarMovies.length !== 0 ? (
          <h3 className={styles.subTitleFilm}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}С
            фильмом "{film.name}" смотрят
          </h3>
        ) : (
          ""
        )}
        <div className={styles.wrapperItems}>
          {film.similarMovies.map((f, index) => {
            if (index < 7) {
              return (
                <div key={index} className={styles.film}>
                  <Link className={styles.linkFilm} href={`/films/${f.id}`}>
                    <Image
                      className={styles.filmImage}
                      src={f.poster.url}
                      alt={f.name}
                      width={153}
                      height={235}
                    />
                    <p className={styles.filmTitle}>{f.name}</p>
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </div>

      <div className={styles.wrapperFacts}>
        {film.facts.length !== 0 ? (
          <h3 className={styles.titleFact}>Знаете ли вы, что</h3>
        ) : (
          ""
        )}
        <ul className={styles.listFacts}>
          {film.facts.map((fact, index) => {
            if (index < 7) {
              return (
                <li className={styles.paragrafFact} key={index}>
                  {fact.value.replace(/<[^>]*>/g, "")}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};
