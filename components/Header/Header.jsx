"use client";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  KinopoiskDev,
  MovieQueryBuilder,
  SORT_TYPE,
  SPECIAL_VALUE,
} from "@openmoviedb/kinopoiskdev_client";
import { SearchFilm } from "@/components/SearchFilm/SearchFilm";

export const Header = () => {
  const kp = new KinopoiskDev("EBZZ6S8-AQ346N3-H1PCJ82-9SAZ5MY");
  const [search, setSearch] = useState(null);
  const [searchFilm, setSearchFilm] = useState();
  const [isSearchFilmOpen, setIsSearchFilmOpen] = useState(false);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // const closeAndOpenSearchFilm = () => {
  //   setIsSearchFilmOpen((prevState) => !prevState);
  // };

  useEffect(() => {
    const getMovieByTitle = async () => {
      const queryBuilder = new MovieQueryBuilder();
      const query = queryBuilder
        .select([
          "id",
          "name",
          "rating",
          "poster",
          "year",
          "genres.name",
          "type",
        ])
        .filterExact("poster.url", SPECIAL_VALUE.NOT_NULL)
        .filterExact("name", search)
        .paginate(1, 4)
        .build();
      const { data, error, message } = await kp.movie.getByFilters(query);
      setSearchFilm(data);
    };
    getMovieByTitle();
  }, [kp.movie, search]);

  console.log(search);
  console.log(searchFilm);

  return (
    <header>
      <div className={styles.container}>
        <nav className={styles.navMenu}>
          <div>
            <Image src={"/logo.png"} alt={"logo"} width={55} height={55} />
          </div>
          <ul className={styles.ulList}>
            <li className={styles.liItem}>
              <Link className={styles.link} href={"/"}>
                Что нового
              </Link>
            </li>
            <li className={styles.liItem}>
              <Link className={styles.link} href={"/films"}>
                Фильмы
              </Link>
            </li>
            <li className={styles.liItem}>
              <Link className={styles.link} href={"/series"}>
                Сериалы
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.wrapperSerch}>
          <input
            onChange={handleSearch}
            className={styles.input}
            type="text"
            placeholder="Поиск..."
            value={search}
          />
          <div className={styles.wrapperButtons}>
            <button className={styles.buttonHeader}>Войти</button>
          </div>
        </div>
        {isSearchFilmOpen && searchFilm && (
          <SearchFilm searchFilm={searchFilm} />
        )}
      </div>
    </header>
  );
};
