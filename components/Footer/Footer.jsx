"use client";

import styles from './Footer.module.css';
import Link from "next/link";


export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.line}></div>
            <div className={styles.container}>
                <div className={styles.links}>
                    <Link href="/">Главная</Link>
                    <Link href="/">Фильмы</Link>
                    <Link href="/">Сериалы</Link>
                    <Link href="/">Мультфильмы</Link>
                </div>
                <p className={styles.title}>&copy; {new Date().getFullYear()} Cinema-Rating</p>
            </div>
        </footer>
    );
}


