"use client";
import styles from "./FilterFilms.module.css";
import {useState} from "react";
import {genres} from "@/components/helpers/helpers";
import {years} from "@/components/helpers/helpers";
import {ratings} from "@/components/helpers/helpers";
import Image from "next/image";

export const FilterFilms = () => {
    const [selectGenre, setSelectGenre] = useState('');
    const [selectYears, setSelectYears] = useState('');
    const [selectRatings, setSelectRatings] = useState('');

    return (
        <div className={styles.container}>
            <div className={styles.filterWrapper}>
                <select className={styles.filterSelect} id="genreSelect" value={selectGenre}>
                    <option value="" disabled={true}>Выберите жанр</option>
                    {genres.map((genre,index) => {
                        return <option key={index} value={genre}>{genre}</option>
                    })}
                </select>
                <select className={styles.filterSelect} id="yearsSelect" value={selectYears}>
                    <option value="" disabled={true}>Годы</option>
                    {years.map((year, index) => {
                        return <option key={index} value={year}>{year}</option>
                    })}
                </select>
                <select className={styles.filterSelect} id="ratingSelect" value={selectRatings}>
                    <option value="" disabled={true}>Рейтинг</option>
                    {ratings.map((rating, index) =>{
                        return <option key={index} value={rating}>{rating}</option>
                    })}
                </select>
            </div>
            <div className={styles.filterReset}>
                <div className={styles.filterX}><Image src={'./cancel.svg'} alt='cancel' width={18} height={18}/></div>
                <div className={styles.filterDescr}>Сбросить фильтр</div>
            </div>
        </div>
    )
}


