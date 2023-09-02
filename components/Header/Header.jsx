"use client";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
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
            <li className={styles.liItem}>
              <Link className={styles.link} href={"/"}>
                Мультфильмы
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.wrapperSerch}>
          <input className={styles.input} type="text" placeholder="Поиск..." />
          <div className={styles.wrapperButtons}>
            <button className={styles.buttonHeader}>Войти</button>
          </div>
        </div>
      </div>
    </header>
  );
};
