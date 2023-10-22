"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  KinopoiskDev,
  MovieQueryBuilder,
  SORT_TYPE,
  SPECIAL_VALUE,
} from "@openmoviedb/kinopoiskdev_client";

import { Navbar } from "../Navbar/Navbar";
import {
  SignInButton,
  UserButton,
  useAuth,
  SignOutButton,
} from "@clerk/nextjs";
import { SearchFilm } from "../SearchFilm/SearchFilm";

export const Header = () => {
  const kp = new KinopoiskDev(process.env.NEXT_PUBLIC_API_KEY);
  const [search, setSearch] = useState("");
  const [searchFilm, setSearchFilm] = useState();
  const [isSearchFilmOpen, setIsSearchFilmOpen] = useState(false);

  const input = document.querySelector("#searchInput");
  const listFilms = document.querySelector("#listFilms");

  const { isLoaded, userId, sessionId, getToken } = useAuth();
  console.log(isLoaded, userId, sessionId);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const closeAndOpenSearchFilm = () => {
    setIsSearchFilmOpen((prevState) => !prevState);
  };

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
  }, [search]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchFilm &&
        event.target !== input &&
        event.target.parentNode !== listFilms
      ) {
        setIsSearchFilmOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchFilm]);

  return (
    <header>
      <div className={styles.container}>
        <nav className={styles.navMenu}>
          <div>
            <Image src={"/logo.png"} alt={"logo"} width={55} height={55} />
          </div>
          <Navbar userId={userId} />
        </nav>
        <div className={styles.wrapperSerch}>
          <input
            onChange={handleSearch}
            className={styles.input}
            type="text"
            placeholder="Поиск..."
            value={search}
            onClick={closeAndOpenSearchFilm}
            id="searchInput"
          />
          <div className={styles.wrapperButtons}>
            {userId === null ? (
              <SignInButton mode="modal">
                <button className={styles.authButton}>Войти</button>
              </SignInButton>
            ) : (
              ""
            )}
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
        {isSearchFilmOpen && searchFilm && (
          <SearchFilm searchFilm={searchFilm} />
        )}
      </div>
    </header>
  );
};
