"use client";
import styles from './FilmsTitle.module.css';
import {useState} from "react";
import {descrFilms, descrSeries, descrMain} from "@/components/helpers/helpers";

export const FilmsTitle = ({type}) => {
    console.log(type)
    const[expanded, setExpanded] = useState(false)
    let title;
    let descr;

    switch (type) {
        case 'films' :
            title = "Фильмы смотреть онлайн";
            descr = descrFilms;
            break;
        case 'series' :
            title = "Сериалы смотреть онлайн";
            descr = descrSeries;
            break;
        case 'main' :
            title = "Онлайн-кинотеатр: фильмы в хорошем качестве всегда приносят настоящее удовольствие";
            descr = descrMain;
            break;
        default:
            break;
    }

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
