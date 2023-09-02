"use client";
import styles from './FilmsTitle.module.css';
import {useState} from "react";
import {descrFilms, descrSeries} from "@/components/helpers/helpers";

export const FilmsTitle = ({type}) => {

    const[expanded, setExpanded] = useState(false)
    const title = type === 'films' ? 'Фильмы смотреть онлайн' : 'Сериалы смотреть онлайн'
    const descr = type === 'films' ? descrFilms : descrSeries
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <div className={`${styles.descrContainer} ${expanded ? styles.expanded : ""}`}>
                <p className={styles.text}>{descr}</p>
            </div>
            <span className={styles.expandButton} onClick={()=> setExpanded(!expanded)}>{expanded ? "Свернуть" : "Развернуть"}</span>
        </div>
    )
}

export default FilmsTitle
