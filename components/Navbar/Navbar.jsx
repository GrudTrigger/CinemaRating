import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

export const Navbar = ({ userId }) => {
  return (
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
      {userId !== null ? (
        <li className={styles.liItem}>
          <Link className={styles.link} href={"/favourites"}>
            Избранное
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
